'use strict';

var AWS = require('aws-sdk');

class BusinessLogic {
  constructor(bucket) {
    this.s3 = new AWS.S3();
    this.bucket = bucket;
    console.log('Init with', [ bucket ]);
  }

  hello(event) {
    var s3Objects = this.listObjects();

    return {
      message: "This is message from Business Logic",
      objects: s3Objects,
      input: event
    }
  }

  listObjects() {
    var params = {
      Bucket: this.bucket,
      MaxKeys: 5
    };

    var error='', list = [];

    console.log('Tring to get S3 objects');
    this.s3.listObjects(params, function(err, data) {
      if(err) {
        console.log(err, err.stack);
        error = err.stack;
      }
      else {
        console.log('Success', data);
        list = data.Contents;
      }
    });

    return {
      error, list
    }
  }
}

module.exports = BusinessLogic;
