"use strict";
exports.addends = addend;
exports.getMiddle = getMiddle;
exports.rotateLeft = rotateArrayLeft;
exports.rotateRight = rotateArrayRight;
exports.rotateNRight = rotateArrayRightNTimes;

/**
 *
 * @param {object} arr array to add first and last elements of
 * @return {number} sum sum of the first and last elements of the array
 */
function addend(arr) {
  let sum = arr[0] + arr[arr.length - 1];
  return sum;
}

// console.log("expect to return 7 --", addend([1, 2, 3, 4, 5, 6]), typeof [1, 2]);

// -------------------------------//------------------------------//

/**
 *
 * @param {object} arr array to check the middle element
 * @return {any value} i middle element -if the length of array is odd / average of the two middle elements if the length of array is even
 */
function getMiddle(arr) {
  let i;
  if (arr.length % 2 !== 0) {
    i = Math.floor(arr.length / 2);
    return arr[i];
  } else {
    i = (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2;
  }
  return i;
}
// console.log("expect 4 --", getMiddle([0, 2, 4, 8, 9]));
// console.log("expect 6 --", getMiddle([2, 4, 8, 9]));

// -------------------------------//------------------------------//
/**
 *
 * @param {object} arr array to rotate
 * @return {object} arr rotated array
 */
function rotateArrayLeft(arr) {
  let shiftingElement = arr.shift();
  arr.push(shiftingElement);
  return arr;
}
// console.log(rotate([0, 1, 2]));

function rotateArrayRight(arr) {
  let poppedElement = arr.pop();
  arr.unshift(poppedElement);
  return arr;
}
// console.log(rotateArrayRight([0, 1, 2]));

function rotateArrayRightNTimes(arr, n) {
  for (let i = 0; i < n; i++) {
    let poppedElement = arr.pop();
    arr.unshift(poppedElement);
  }
  return arr;
}
