const {assert} = require("chai")
const trueOrFalse = require("../algorithms/booleanData.js")

describe("asserts", () => {
    it("assert", () => {
      //assert for equations and inequalities
      var a=1,b=2,c=1;
      assert.equal(trueOrFalse(a>b),"false");
      assert.equal(trueOrFalse(a===b),"false");
      assert.equal(trueOrFalse(a<b),"true");
      assert.equal(trueOrFalse(a!==b),"true");
      assert.equal(trueOrFalse(b>c),"true");
      assert.equal(trueOrFalse(b===c),"false");
      assert.equal(trueOrFalse(b<c),"false");
      assert.equal(trueOrFalse(b!==c),"true");
      assert.equal(trueOrFalse(a===c),"true");
      assert.equal(trueOrFalse(a!==c),"false");
      //assert for logical operators and bitwise operators
      var t=true,f=false;
      assert.equal(trueOrFalse(t&&f),"false");
      assert.equal(trueOrFalse(f&&f),"false");
      assert.equal(trueOrFalse(t&&t),"true");
      assert.equal(trueOrFalse(t||f),"true");
      assert.equal(trueOrFalse(t||t),"true");
      assert.equal(trueOrFalse(f||f),"false");
      assert.equal(trueOrFalse(t&f),"false");
      assert.equal(trueOrFalse(t&t),"true");
      assert.equal(trueOrFalse(f&f),"false");
      assert.equal(trueOrFalse(t|f),"true");
      assert.equal(trueOrFalse(t|t),"true");
      assert.equal(trueOrFalse(f|f),"false");
      assert.equal(trueOrFalse(!t),"false");
      assert.equal(trueOrFalse(!f),"true");
      assert.equal(trueOrFalse(t^f),"true");
      assert.equal(trueOrFalse(t^t),"false");
      assert.equal(trueOrFalse(f^f),"false");
      //assert for implicit conversion 
      assert.equal(trueOrFalse(true),"true");
      assert.equal(trueOrFalse(123),"true");
      assert.equal(trueOrFalse("123"),"true");
      assert.equal(trueOrFalse(["123"]),"true");
      assert.equal(trueOrFalse("false"),"true");
      assert.equal(trueOrFalse(false),"false");
      assert.equal(trueOrFalse(0),"false");
      assert.equal(trueOrFalse(""),"false");
      assert.equal(trueOrFalse(null),"false");
      assert.equal(trueOrFalse([].length),"false");
      assert.equal(trueOrFalse(undefined),"false");
    });
  });