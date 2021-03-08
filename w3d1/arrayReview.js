"use strict";

exports.findMin = findMin;
exports.sumOddIndicesValues = sumOddIndicesValues;
exports.sumArrays = sumArrays;

//  a,b,c,e,g,j

/**
 *
 * @param {object} arr array of numbers
 * @returns {number}num the minimum number in the array
 */
function findMin(arr) {
  let min = Infinity;

  for (let each of arr) {
    if (each < min) {
      min = each;
    }
  }
  return min;
}
// console.log(findMin([5, 6, 4, 7, 98, 2, 3, 4]));

/**
 *
 * @param {object} arr array to add elements of odd number index
 * @returns {number} sum sum of elements of odd number index
 */
function sumOddIndicesValues(arr) {
  let sum = 0;
  for (let i = 1; i < arr.length; i += 2) {
    sum += arr[i];
  }
  return sum;
}
// console.log(sumOddIndicesValues([1, 3, 4, 6, 4, 7, 2]));

/**
 *
 * @param {object} arr1 arrays whose elements is to be added
 * @param {object} arr2 arrays whose elements is to be added
 * @returns {object} sumArr array of the sum of the corresponding elements of arr1&arr2
 */
function sumArrays(arr1, arr2) {
  let sumArr = [];
  for (let i = 0; i < arr1.length; i++) {
    sumArr.push(arr1[i] + arr2[i]);
  }
  return sumArr;
}
console.log(sumArrays([1, 2, 3, 4, 5], [5, 4, 3, 2, 1]));
