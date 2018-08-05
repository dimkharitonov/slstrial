# slstrial
Trial of the serverless framework

## Deploy

serverless deploy --domain trialproject

-- domain specifies domain for the project. By default it's **slstrial-example** 

## Test

mocha handler.test.js --compilers js:babel-core/register
