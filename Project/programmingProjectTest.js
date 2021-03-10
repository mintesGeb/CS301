"use strict";
const assert = require("assert");
const test = require("./programmingProject.js");

/*eslint-disable*/

// 1. A porcupine number is a prime number whose last digit is 9 and the next prime number that
// follows it also ends with the digit 9. For example, 139 is a porcupine number because:
// a. it is a prime
// b. it ends in a 9
// c. The next prime number after it is 149 which also ends in 9.
// Write a method named findPorcupineNumber which takes an integer argument n and
// returns the first porcupine number that is greater than n. So findPorcupineNumber(0)
// would return 139 (because 139 happens to be the first porcupine number) and so would
// findPorcupineNumber(138). But findPorcupineNumber(139) would return 409 which
// is the second porcupine number.

// describe("", function () {
//   it("", function () {
//     function findPorcupineNumber(num) {}
//     assert.strictEqual(test.findPorcupineNumber(139), 409);
//   });
// });

// 2. Given an array of integers nums and an integer target, return indices of the two numbers such
// that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the
// same element twice. You can return the answer in any order.

describe("", function () {
  it("", function () {
    assert.deepStrictEqual(test.addToTarget([2, 7, 11, 15], 9), [0, 1]);
  });

  it("", function () {
    assert.deepStrictEqual(test.addToTarget([2, 3, 4], 6), [0, 2]);
  });

  it("", function () {
    assert.deepStrictEqual(test.addToTarget([3, 3], 6), [0, 1]);
  });
});

// 3. Write a function named mostFrequent() that given an array, finds the most frequent element
// in it. If there are multiple elements that appear maximum number of times, returns any one of
// them

describe("", function () {
  it("", function () {
    assert.strictEqual(test.mostFrequent([4, 3, 6, 8, 3, 8, 4, 9, 6, 4]), 4);
  });
});

// 4. Given an array of integers, write a function that finds the pair in array whose sum is closest to 0.
// If there are more than one pair, return any pair.
// For e.g., [4,2, -1,3,-2,-3] → [2,-2]

describe("", function () {
  //   it("", function () {
  //     assert.strictEqual(test.closestToZero([4, 2, -1, 3, -2, -3]), [2, -2]);
  //   });

  it("", function () {
    assert.deepStrictEqual(test.closestToZero([1, 4, -1, -2, -5]), [1, -1]);
  });
});

// 5.  Write a function, that given two arrays representing two non-negative integers with digits, adds
// the two numbers, and return it as an array.

describe("add numbers", function () {
  it("add [3, 4, 2] and [4, 6, 5] as numbers and return [8,0,7] ", function () {
    assert.strictEqual(test.addTwoNumbers([3, 4, 2], [4, 6, 5]), [8, 0, 7]);
  });

  it("", function () {
    assert.strictEqual(test.addTwoNumbers([1, 1], [1, 2, 3]), [1, 3, 4]);
  });

  it("", function () {
    assert.strictEqual(test.addTwoNumbers([1, 1], [9, 9]), [1, 1, 0]);
  });
});

//6. Given two binary strings, return their sum (also a binary string).
// The input strings are both non-empty and contains only characters 1 and 0.
// #add_binary
