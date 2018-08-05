'use strict';

const BusinessLogic = require('./business-logic');

const bl = new BusinessLogic('dk-slstrial-example-dev');

describe("Trial project tests", function () {

  it('the hello function should work', function(done) {
    var event = {};

    console.log(JSON.stringify(bl.hello(event)));
    done();
  })
});