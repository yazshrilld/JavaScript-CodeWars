const {assert} = require("chai")
const {equal1, equal2, equal3, equal4, equal5} = require("../algorithms/numberData.js")

describe("Tests", () => {
    it("test", () => {
      assert.strictEqual(equal1(), 100, "value of a+b is not equal to 100");
      assert.strictEqual(equal2(), 100, "value of a-b is not equal to 100");
      assert.strictEqual(equal3(), 100, "value of a*b is not equal to 100");
      assert.strictEqual(equal4(), 100, "value of a/b is not equal to 100");
      assert.strictEqual(equal5(), 100, "value of a%b is not equal to 100");
    });
  });