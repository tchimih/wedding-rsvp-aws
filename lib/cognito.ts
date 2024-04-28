import { Duration, Stack, StackProps } from "aws-cdk-lib";
import {
  AccountRecovery,
  CfnIdentityPool,
  CfnIdentityPoolRoleAttachment,
  UserPool,
  UserPoolClient,
  UserPoolOperation,
} from "aws-cdk-lib/aws-cognito";
import { Table } from "aws-cdk-lib/aws-dynamodb";
import {
  FederatedPrincipal,
  PolicyStatement,
  Role,
  ServicePrincipal,
} from "aws-cdk-lib/aws-iam";
import { Code, Function, Runtime } from "aws-cdk-lib/aws-lambda";
import { Construct } from "constructs";

interface CognitoStackProps extends StackProps {
  readonly userTable: Table;
}

export class CognitoStack extends Stack {
  readonly userPool: UserPool;
  readonly userPoolClient: UserPoolClient;
  readonly identityPool: CfnIdentityPool;

  constructor(scope: Construct, id: string, props?: CognitoStackProps) {
    super(scope, id, props);

    this.userPool = new UserPool(this, "wedding-user-pool-new", {
      userPoolName: "wedding-rsvp-user-pool_new",
      selfSignUpEnabled: true,
      signInAliases: {
        email: true,
      },
      standardAttributes: {
        email: {
          required: true,
          mutable: false, // assuming you don't want users to update their email
        },
      },
      userInvitation: {
        emailSubject: "Caroline and Anis' wedding.",
      },
      passwordPolicy: {
        minLength: 8,
        requireDigits: true,
        requireLowercase: true,
        requireUppercase: true,
        requireSymbols: true,
        tempPasswordValidity: Duration.days(7),
      },
      accountRecovery: AccountRecovery.EMAIL_ONLY,
    });

    this.userPoolClient = this.userPool.addClient(
      "wedding-user-pool-client-new",
      {
        authFlows: {
          userSrp: true,
          userPassword: true,
        },
        enableTokenRevocation: true,
        preventUserExistenceErrors: true,
        accessTokenValidity: Duration.minutes(60),
        idTokenValidity: Duration.minutes(60),
        refreshTokenValidity: Duration.days(30),
      }
    );

    // Identity Pool
    this.identityPool = new CfnIdentityPool(this, "wedding-identity-pool", {
      allowUnauthenticatedIdentities: true,
      cognitoIdentityProviders: [
        {
          clientId: this.userPoolClient.userPoolClientId,
          providerName: this.userPool.userPoolProviderName,
        },
      ],
    });

    // IAM Roles
    const unauthenticatedRole = new Role(this, "UnauthenticatedIamRole", {
      assumedBy: new FederatedPrincipal(
        "cognito-identity.amazonaws.com",
        {
          StringEquals: {
            "cognito-identity.amazonaws.com:aud": this.identityPool.ref,
          },
          "ForAnyValue:StringLike": {
            "cognito-identity.amazonaws.com:amr": "unauthenticated",
          },
        },
        "sts:AssumeRoleWithWebIdentity"
      ),
    });
    unauthenticatedRole.addToPolicy(
      new PolicyStatement({
        actions: ["dynamodb:PutItem", "dynamodb:GetItem"],
        resources: [props!.userTable.tableArn],
      })
    );

    const authenticatedRole = new Role(this, "AuthenticatedIamRole", {
      assumedBy: new FederatedPrincipal(
        "cognito-identity.amazonaws.com",
        {
          StringEquals: {
            "cognito-identity.amazonaws.com:aud": this.identityPool.ref,
          },
          "ForAnyValue:StringLike": {
            "cognito-identity.amazonaws.com:amr": "authenticated",
          },
        },
        "sts:AssumeRoleWithWebIdentity"
      ),
    });
    authenticatedRole.addToPolicy(
      new PolicyStatement({
        actions: [
          "mobileanalytics:PutEvents",
          "cognito-sync:*",
          "cognito-identity:*",
        ],
        resources: ["*"],
      })
    );
    authenticatedRole.addToPolicy(
      new PolicyStatement({
        actions: ["dynamodb:PutItem", "dynamodb:GetItem"],
        resources: [props!.userTable.tableArn],
      })
    );

    // Identity Pool Role Attachment
    new CfnIdentityPoolRoleAttachment(this, "IdentityPoolRoleAttachment", {
      identityPoolId: this.identityPool.ref,
      roles: {
        authenticated: authenticatedRole.roleArn,
        unauthenticated: unauthenticatedRole.roleArn,
      },
    });

    // Lambda IAM Role
    const preSignUpLambdaRole = new Role(this, "PresignupLambdaRole", {
      assumedBy: new ServicePrincipal("lambda.amazonaws.com"),
    });
    preSignUpLambdaRole.addToPolicy(
      new PolicyStatement({
        actions: [
          "logs:CreateLogGroup",
          "logs:CreateLogStream",
          "logs:PutLogEvents",
        ],
        resources: ["arn:aws:logs:*:*:*"],
      })
    );
    preSignUpLambdaRole.addToPolicy(
      new PolicyStatement({
        actions: ["cognito-idp:AdminConfirmSignUp"],
        resources: ["*"],
      })
    );

    // Lambda Function
    const preSignUpLambda = new Function(this, "PreSignUpLambdaFunction", {
      functionName: "PreSignUpLambdaFunction",
      role: preSignUpLambdaRole,
      description:
        "Automatically verifies a user in Cognito immediately after signup.",
      runtime: Runtime.PYTHON_3_9,
      handler: "index.lambda_handler",
      code: Code.fromInline(`
import logging
  
logger = logging.getLogger()
logger.setLevel(logging.INFO)
  
def lambda_handler(event, context):
    logger.info("Received the following event: %s", event)
    response = event.copy()
    response['response'] = {
        'autoConfirmUser': True,
        'autoVerifyEmail': True,
    }
    return response
`),
    });

    preSignUpLambda.addPermission("PresignupLambdaPermission", {
      principal: new ServicePrincipal("cognito-idp.amazonaws.com"),
      action: "lambda:InvokeFunction",
      sourceArn: `arn:aws:cognito-idp:${this.region}:${this.account}:userpool/${this.userPool.userPoolId}`,
    });
    this.userPool.addTrigger(UserPoolOperation.PRE_SIGN_UP, preSignUpLambda);
  }
}
