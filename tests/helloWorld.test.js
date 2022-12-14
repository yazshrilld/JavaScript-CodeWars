const { assert } = require('chai');
const helloWorld = require("../algorithms/helloWorld.js")

describe("Tests", () => {
  it("test", () => {
    assert.isFunction(helloWorld, "function helloWorld is not defined")
    helloWorld();
  });
});