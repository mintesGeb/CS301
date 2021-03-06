let assert = require("assert");
let test = require("./l8arrays.js");

describe("", function () {
  it(`["not", "a", "kayak", "eagle", "racecar"] must return [ "a", "kayak", "racecar" ]`, function () {
    assert.strictEqual(
      test.filterPalindromes(["not", "a", "kayak", "eagle", "racecar"]),
      ["a", "kayak", "racecar"]
    );
  });
});

describe("addend", function () {
  it("passing [1,2,3] to get 4", function () {
    assert.strictEqual(test.addends([1, 2, 3]), 4);
  });
});
