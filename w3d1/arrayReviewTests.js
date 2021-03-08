"use strict";
const assert = require("assert");
const rev = require("./arrayReview.js");

/*
2.	Write a function findMin that takes an array as a parameter and returns the minimum value. 
Use a for .. of loop.  
*/
describe("find minimum", function () {
  const arr = [7, 10, 3, 88, 4];
  it("find 3", function () {
    assert.strictEqual(rev.findMin(arr), 3);
  });
});

/*
3.	Write a function sumOddIndicesValues that takes an array as a parameter and returns the sum of values on the odd indices.  
*/
describe("find minimum", function () {
  const arr = [1, 3, 4, 6, 4, 7, 2];
  it("find 3", function () {
    assert.strictEqual(rev.sumOddIndicesValues(arr), 16);
  });
});

/*
4.	Write a function sumArrays, that takes two arrays as parameters (you can assume of same length) then returns a 
new array by adding two array values at the corresponding indices. 
*/
describe("sumArrays", function () {
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [5, 4, 3, 2, 1];
  it("sum to 6 6 6 ... ", function () {
    assert.deepStrictEqual(rev.sumArrays(arr1, arr2), [6, 6, 6, 6, 6]);
  });
});
