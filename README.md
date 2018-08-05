# slstrial
Trial of the serverless framework

## Deploy

serverless deploy --domain trialproject

-- domain specifies domain for the project. By default it's **slstrial-example** 

## Test

mocha handler.test.js --compilers js:babel-core/register

# To Read

* [S3: Specifying Permissions in a Policy](https://docs.aws.amazon.com/AmazonS3/latest/dev/using-with-s3-actions.html)
* [Class AWS.S3 API](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html)
* [Learn to Build Full-Stack Apps with Serverless and React on AWS](https://serverless-stack.com) 
  * [Serverless Environment Variables](https://serverless-stack.com/chapters/serverless-environment-variables.html)
* [Unit testing a Serverless application](https://medium.com/a-man-with-no-server/unit-testing-a-serverless-application-b0e877142be5)