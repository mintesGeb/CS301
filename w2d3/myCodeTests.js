const assert = require("assert");
const { isMainThread } = require("worker_threads");
const fun = require("./pow.js");

describe("pow", function () {
  it("2 powered by 3 is 8", function () {
    assert.strictEqual(fun.pow(2, 3), 8);
  });
});
