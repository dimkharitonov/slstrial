'use strict';

var AWS = require('aws-sdk');

class BusinessLogic {
  constructor(bucket) {
    this.s3 = new AWS.S3();
    this.bucket = bucket;
    console.log('Init with', [ bucket ]);
  }

  hello(event) {

    this.saveObject('test-object.json', {
      name: "test object",
      credits: [
        {
          person: "dk",
          role: "author"
        },
        {
          person: "dk",
          role: "idea"
        }
      ],
      license: {
        type: "CC-BY-SA 4.0",
        url: "https://google.com"
      }
    });

    this.listObjects();

    return {
      message: "This is message from Business Logic",
      input: event
    }
  }

  listObjects() {
    var params = {
      Bucket: this.bucket,
      MaxKeys: 5
    };

    this.s3.listObjects(params, function(err, data) {
      console.log('Trying to get S3 objects');
      if(err) {
        console.log(err.stack);
      }
      else {
        console.log('Success', data.Contents);
      }
    });

    return true;
  }

  saveObject(name, payload) {
    var params = {
      Bucket: this.bucket,
      Key: name,
      Body: JSON.stringify(payload),
      ACL: "public-read",
      CacheControl: 'max-age: 80000',
      ContentType: 'application/json',
      StorageClass: 'REDUCED_REDUNDANCY',
      Tagging: 'purpose=test'
    };

    this.s3.putObject(params, function(err, data){
      console.log('Trying to save object', payload);
      if(err) {
        console.log(err.stack);
      } else {
        console.log('Success', data);
      }
    });

    return true;
  }
}

module.exports = BusinessLogic;
