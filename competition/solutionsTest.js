"use strict";
const assert = require("assert");
const solutions = require("./solutions.js");

describe("divisibleSumPairs", function () {
  it("for arr= [1,2,3,4,5,6] and k=5 result should be 3", function () {
    const arr = [1, 2, 3, 4, 5, 6];
    assert.strictEqual(solutions.divisibleSumPairs(arr, 5), 3);
  });
});

describe("mostFrequentSight", function () {
  it("for arr=[1,1,2,2,3] result should be 1", function () {
    const arr = [1, 1, 2, 2, 3];
    assert.strictEqual(solutions.mostFrequentSight(arr), 1);
  });
});

describe("countSocksPairs", function () {
  it("for arr=[1,2,1,2,1,3,2] result should be 2", function () {
    const arr = [1, 2, 1, 2, 1, 3, 2];
    assert.strictEqual(solutions.countSocksPairs(arr), 2);
  });
});

describe("computeHeight", function () {
  it("for initial height of 1 and 4 cycles, height should be 7", function () {
    assert.strictEqual(solutions.computeHeight(1, 4), 7);
  });
});

describe("computeCharges", function () {
  it("first report for 2 customers", function () {
    const charges = [
      { custId: 1, charges: [5, 7, 3] },
      { custId: 2, charges: [20, 60, 50, 30] },
    ];
    const report = [
      { custId: 1, average: 5, maximum: 7 },
      { custId: 2, average: 40, maximum: 60 },
    ];

    assert.deepStrictEqual(solutions.computeCharges(charges), report);
  });
});

describe("findMinDistance", function () {
  it("min distance for arr = [3,2,1,2,3] should be 2", function () {
    const arr = [3, 2, 1, 2, 3];
    assert.strictEqual(solutions.findMinDistance(arr), 2);
  });
});
