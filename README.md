# Wedding RSVP website [![Built with React](https://img.shields.io/badge/Built_with-React-blue.svg)](https://reactjs.org/)  [![CDK](https://img.shields.io/badge/CDK-Enabled-brightgreen)](https://aws.amazon.com/cdk/)

This repository contains the source code for my RSVP wedding website. The website is structured has two parts

1. `frontend` a React project started from `create-react-app` 

1. `CDK` using AWS Cloud Development Kit to deploy an end-to-end infrastrutre to create a Cognito user pool, DynamoDB table, CloudFront distribution that will host the React app (in `frontend`) in S3 bucket and, setup domain with ACM TLS certificate.

You can view the live site at https://wedding.caroetanis.net

## Features

The website provides the following features:

- Multi-language support (English, French & Spanish)
- Ability to manage the RSVP
- Authentication through AWS Amplify.

## Kudos

This project was inspired by this very [awesome GitHub project](https://github.com/salimhamed/wedding-website)

# Deploy the project

> ℹ️ **Note:**
>
> - Please ensure that you take into account that this project will generate AWS resources, incurring costs. 
> - Make sure to register a domain name/create a TLS certificate in ACM (or any other) and adapt the code in `lib/wedding-rsvp-backend-stack.ts`


1. Clone the website

```bash
git clone https://github.com/tchimih/wedding-rsvp-aws.git
```
2. Update the Hosted zone id and certificate arn or adapt the code according to your preferences using the file `lib/wedding-rsvp-backend-stack.ts` 

3. Run & build the website 

```bash
cd wedding-rsvp-aws/frontend/
npm run start
npm run build
```

4. Check you have valid AWS credentials (check AWS docs on how to do it)
5. Deploy your cdk stack.

```bash
cd wedding-rsvp-aws/
cdk ls # list all the stacks
cdk deploy WeddingRsvpBackendStack # or change the stack you want to deploy
```

Make sure also to update the .env file after this to have your resources added in there.