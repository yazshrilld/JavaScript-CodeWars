const {assert} = require("chai")
const {Dad, Bee, banana} = require("../algorithms/stringData.js")

describe("Tests", () => {
    it("test", () => {
      assert.equal(Dad(),"Dad");
      assert.equal(Bee(),"Bee");
      assert.equal(banana(),"banana");
    });
  });