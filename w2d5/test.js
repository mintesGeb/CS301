let assert = require("assert");
let test = require("./arrayMethods.js");

describe("isArrayEqual", function () {
  it("check if the arrays are equal", function () {
    assert.strictEqual(test.isArrayEqual([0, 1, 2], [0, 1, 2]), true);
  });

  it("check if the arrays are equal", function () {
    assert.strictEqual(test.isArrayEqual([3, 4, 2, 5], [3, 2, 5, 4]), false);
  });

  it("check if the arrays are equal", function () {
    assert.strictEqual(test.isArrayEqual([3, 4, 2, 6, 5], [3, 2, 5, 4]), false);
  });

  it("check if the arrays are equal", function () {
    assert.strictEqual(test.isArrayEqual([3, 4, 2, 5], [3, 2, 4, 5, 4]), false);
  });
});
