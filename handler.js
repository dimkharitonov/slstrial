'use strict';

const BusinessLogic = require('./business-logic');

module.exports.hello = (event, context, callback) => {

  var bl = new BusinessLogic(process.env.BUCKET_NAME);

  const response = {
    statusCode: 200,
    body: JSON.stringify(bl.hello(event)),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
