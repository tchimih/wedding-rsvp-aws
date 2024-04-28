import { Stack, StackProps } from "aws-cdk-lib";
import {
  AttributeType,
  BillingMode,
  ProjectionType,
  Table,
} from "aws-cdk-lib/aws-dynamodb";
import { Construct } from "constructs";

export class DataStorage extends Stack {
  readonly table: Table;

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    this.table = new Table(this, "wedding-rsvp-table", {
      billingMode: BillingMode.PAY_PER_REQUEST,
      partitionKey: { name: "Email", type: AttributeType.STRING },
      sortKey: { name: "Domain", type: AttributeType.STRING },
    });

    // Optional: Add Global Secondary Index
    this.table.addGlobalSecondaryIndex({
      indexName: "EmailIndex",
      partitionKey: { name: "Email", type: AttributeType.STRING },
      projectionType: ProjectionType.ALL,
    });
  }
}
