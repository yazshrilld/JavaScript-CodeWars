const { assert } = require("chai");
const {getLength, getFirst, getLast, pushElement, popElement} = require("../algorithms/arrayData.js")

describe("asserts", () => {
    it("assert", () => {
      assert.equal(getLength([1,2,3]),3);
      assert.equal(getFirst([1,2,3]),1);
      assert.equal(getLast([1,2,3]),3);
      assert.equal(pushElement([1,2,3]).length,4);
      assert.equal(popElement([1,2,3]).length,2);
    });
  });