const {assert} = require("chai")
const {Dad, Bee, banana} = require("../algorithms/stringData.js")

describe("Tests", () => {
    it("test", () => {
      Test.assertSimilar(Dad(),"Dad");
      Test.assertSimilar(Bee(),"Bee");
      Test.assertSimilar(banana(),"banana");
    });
  });