'use strict';

const BusinessLogic = require('./business-logic');

const bl = new BusinessLogic('dk-slstrial-example-dev');

describe("Trial project tests", function () {

  it('putObjects should save object in the bucket', function (done) {
    bl.saveObject('test-object.json', {
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
    done();
  });

  it('listObject should return objects in the bucket', function(done){
    bl.listObjects();
    done();
  });
});