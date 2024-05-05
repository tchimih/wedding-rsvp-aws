import * as cdk from "aws-cdk-lib";
import * as path from "path";

import {
  Bucket,
  ObjectOwnership,
  BlockPublicAccess,
  CorsRule,
  HttpMethods,
  BucketAccessControl,
  BucketEncryption,
} from "aws-cdk-lib/aws-s3";
import { BucketDeployment, Source } from "aws-cdk-lib/aws-s3-deployment";
import { Construct } from "constructs";
import {
  CachePolicy,
  CloudFrontAllowedMethods,
  CloudFrontWebDistribution,
  OriginAccessIdentity,
  SSLMethod,
  SecurityPolicyProtocol,
  ViewerCertificate,
} from "aws-cdk-lib/aws-cloudfront";
import {
  AwsCustomResource,
  AwsCustomResourcePolicy,
  PhysicalResourceId,
} from "aws-cdk-lib/custom-resources";
import { DataStorage } from "./ddb";
import { CognitoStack } from "./cognito";
import { ARecord, HostedZone, RecordTarget } from "aws-cdk-lib/aws-route53";
import { Certificate } from "aws-cdk-lib/aws-certificatemanager";
import { CloudFrontTarget } from "aws-cdk-lib/aws-route53-targets";

export class WeddingRsvpBackendStack extends cdk.Stack {
  readonly bucket: Bucket;
  readonly distribution: CloudFrontWebDistribution;

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Reference an existing hosted zone
    const existingHostedZoneId = "HOSTED_ZONE_ID";
    const existingHostedZoneName = "ZONE_NAME"; // The name of your hosted zone

    const hostedZone = HostedZone.fromHostedZoneAttributes(this, "hostedZone", {
      hostedZoneId: existingHostedZoneId,
      zoneName: existingHostedZoneName,
    });

    const certificate = Certificate.fromCertificateArn(
      this,
      "weddingCertificate",
      "CERT_ARN"
    );

    // DynamoDB table
    const userTable = new DataStorage(this, "wedding-data-storage", {
      env: props?.env,
    });

    const cognitoStack = new CognitoStack(this, "wedding-cognito-stack", {
      userTable: userTable.table,
    });

    const s3CorsRule: CorsRule = {
      allowedMethods: [HttpMethods.GET, HttpMethods.HEAD],
      allowedOrigins: ["*"],
      allowedHeaders: ["*"],
      maxAge: 300,
    };

    this.bucket = new Bucket(this, "wedding-wesbsite", {
      websiteIndexDocument: "index.html",
      bucketName: "wedding-rsvp-website",
      objectOwnership: ObjectOwnership.BUCKET_OWNER_PREFERRED,
      accessControl: BucketAccessControl.PRIVATE,
      blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
      encryption: BucketEncryption.S3_MANAGED,
      cors: [s3CorsRule],
    });

    new BucketDeployment(this, "wedding-website-deployment", {
      sources: [Source.asset(path.join(__dirname, "..", "frontend", "build"))],
      destinationBucket: this.bucket,
    });

    /**
     * Cloudfront stuff
     */
    const oai = new OriginAccessIdentity(this, "wedding-website-oai");
    this.bucket.grantRead(oai);

    this.distribution = new CloudFrontWebDistribution(
      this,
      "wedding-website-distribution",
      {
        originConfigs: [
          {
            s3OriginSource: {
              s3BucketSource: this.bucket,
              originAccessIdentity: oai,
            },
            behaviors: [
              { isDefaultBehavior: true },
              {
                pathPattern: "/*",
                allowedMethods: CloudFrontAllowedMethods.GET_HEAD,
              },
            ],
          },
        ],
        errorConfigurations: [
          {
            errorCode: 404,
            responseCode: 200,
            responsePagePath: "/index.html",
          },
        ],
        // Configure a custom origin request policy
        viewerCertificate: ViewerCertificate.fromAcmCertificate(certificate, {
          aliases: [
            `wedding.${hostedZone.zoneName}`,
            `mariage.${hostedZone.zoneName}`,
          ], // Replace with your domain name
          securityPolicy: SecurityPolicyProtocol.TLS_V1_2_2021,
          sslMethod: SSLMethod.SNI,
        }),
      }
    );

    new ARecord(this, "AliasRecord", {
      zone: hostedZone,
      target: RecordTarget.fromAlias(new CloudFrontTarget(this.distribution)),
      recordName: `wedding.${hostedZone.zoneName}`,
    });

    new ARecord(this, "AliasRecordMAriage", {
      zone: hostedZone,
      target: RecordTarget.fromAlias(new CloudFrontTarget(this.distribution)),
      recordName: `mariage.${hostedZone.zoneName}`,
    });

    const cloudFrontAwsResource = new AwsCustomResource(
      this,
      `CloudFrontInvalidation-${Date.now()}`,
      {
        onCreate: {
          physicalResourceId: PhysicalResourceId.of(
            `${this.distribution.distributionId}-${Date.now()}`
          ),
          service: "CloudFront",
          action: "createInvalidation",
          parameters: {
            DistributionId: this.distribution.distributionId,
            InvalidationBatch: {
              CallerReference: Date.now().toString(),
              Paths: {
                Quantity: 1,
                Items: ["/*"],
              },
            },
          },
        },
        policy: AwsCustomResourcePolicy.fromSdkCalls({
          resources: AwsCustomResourcePolicy.ANY_RESOURCE,
        }),
      }
    );
    cloudFrontAwsResource.node.addDependency(this.distribution);

    // Output values
    new cdk.CfnOutput(this, "UserPoolOutput", {
      value: cognitoStack.userPool.userPoolId,
      description: "The ID for the Cognito User Pool.",
    });

    new cdk.CfnOutput(this, "UserPoolClientOutput", {
      value: cognitoStack.userPoolClient.userPoolClientId,
      description: "The ID for the Cognito User Pool Client.",
    });

    new cdk.CfnOutput(this, "IdentityPoolOutput", {
      value: cognitoStack.identityPool.ref,
      description: "The ID for the Cognito Identity Pool.",
    });

    new cdk.CfnOutput(this, "UserTableOutput", {
      value: userTable.table.tableName,
      description: "The name of the DynamoDB table for User information.",
    });
  }
}
