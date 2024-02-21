const {assert} = require("chai");
const getCount = require("../algorithms/getCount.js")

describe("Vowels Count Tests",function(){
  it("should return 5 for 'abracadabra'",function(){
    assert.strictEqual(getCount("abracadabra"), 5) ;
  });
});

