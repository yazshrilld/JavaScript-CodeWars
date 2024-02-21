const { assert } = require("chai");
const animal = require("../algorithms/objectData.js");


describe("Tests", () => {
  it("test", () => {
    
    // Test.assertSimilar(
    //   animal({ name: "dog", legs: 4, color: "white" }),
    //   "This white dog has 4 legs."
    // );
    assert.equal(animal({ name: "dog", legs: 4, color: "white" }),  "This white dog has 4 legs.")
    assert.equal( animal({ name: "cock", legs: 2, color: "red" }),  "This red cock has 2 legs.")
    assert.equal(animal({ name: "rabbit", legs: 4, color: "gray" }), "This gray rabbit has 4 legs.")
    // Test.assertSimilar(
    //   animal({ name: "cock", legs: 2, color: "red" }),
    //   "This red cock has 2 legs."
    // );
    // Test.assertSimilar(
    //   animal({ name: "rabbit", legs: 4, color: "gray" }),
    //   "This gray rabbit has 4 legs."
    // );
  });
});
