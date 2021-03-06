"use strict";
exports.addends = addend;
exports.getMiddle = getMiddle;
exports.rotateLeft = rotateArrayLeft;
exports.rotateRight = rotateArrayRight;
exports.rotateNRight = rotateArrayRightNTimes;
exports.fmrString = addDigits_PositiveElements;
exports.filterPalindromes = filterpalindrome;
exports.matrixAddition = matrixAddition;
exports.filterRange = filterRange;

/**
 *
 * @param {object} arr array to add first and last elements of
 * @return {number} sum sum of the first and last elements of the array
 */
// function addend(arr) {
//   let sum = arr[0] + arr[arr.length - 1];
//   return sum;
// }
function addend(arr) {
  return arr[0] + arr[arr.length - 1];
}

// console.log("expect to return 7 --", addend([1, 2, 3, 4, 5, 6]), typeof [1, 2]);

// -------------------------------//------------------------------//

/**
 *
 * @param {object} arr array to check the middle element
 * @return {any value} i middle element -if the length of array is odd / average of the two middle elements if the length of array is even
 */
// function getMiddle(arr) {
//   let i;
//   if (arr.length % 2 !== 0) {
//     i = Math.floor(arr.length / 2);
//     return arr[i];
//   } else {
//     i = (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2;
//   }
//   return i;
// }
// console.log("expect 4 --", getMiddle([0, 2, 4, 8, 9]));
// console.log("expect 6 --", getMiddle([2, 4, 8, 9]));

function getMiddle(arr) {
  let middle;
  if (arr.length % 2 === 0) {
    middle = arr.length / 2;
    return (arr[middle] + arr[middle - 1]) / 2;
  } else {
    middle = Math.floor(arr.length / 2);
    return arr[middle];
  }
}
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
function rotateNRight(array, stepsToShift) {
  for (let i = 0; i < stepsToShift; i++) {
    array.unshift(array.pop());
  }

  return array;
}
// console.log(rotateNRight([-10, 2, 3, 4, 20], 4));
// console.log(rotateArrayRightNTimes([-10, 2, 3, 4, 20], 4));

// -------------------------------//------------------------------//

// function stringElementsToArray(str) {
//   let arr = [];
//   let strElement = "";
//   for (let i = 0; i < str.length; i++) {
//     if (i === str.length - 1) {
//       strElement += str[i];
//       let strToNum = Number(strElement);
//       arr.push(strToNum);
//     } else if (str[i] === ",") {
//       let strToNum = Number(strElement);
//       arr.push(strToNum);
//       strElement = "";
//       // break;
//     } else {
//       strElement += str[i];
//     }
//   }
//   return arr;
// }

// function removeNegatives(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       arr.splice(i, 1);
//     }
//   }
//   return arr;
// }
// function addDigits(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let num = arr[i];
//     while (num > 0) {
//       let digit = num % 10;
//       num = Math.floor(num / 10);
//       sum += digit;
//     }
//   }
//   return sum;
// }

// function addDigits_PositiveElements(str) {
//   return addDigits(removeNegatives(stringElementsToArray(str)));
// }

// console.log(stringArray("32, 105,  -22"));
// console.log(removeNegatives([32, 105, -22]));
// console.log(addDigits([32, 105]));
// console.log(addDigits_PositiveElements("32, 105,  -22"));

// "32, 105,  -22"),
// [32, 105, -22] ,
// 11

// let x = "32, 105,  -22";
// console.log(x.split(","));

function prepArray(str) {
  let arr = [];
  let arrTemp = str.split(",");
  for (let each of arrTemp) {
    arr.push(each.trim());
  }
  return arr;
}

function filterNegatives(array) {
  let arr = [];
  for (let each of array) {
    if (each >= 0) {
      arr.push(each);
    }
  }
  return arr;
}

function sumOfDigits(arr) {
  let arrNew = [];
  for (let each of arr) {
    let sum = 0;
    while (each > 0) {
      let rem = each % 10;
      each = Math.floor(each / 10);
      sum += rem;
    }
    arrNew.push(sum);
  }
  return arrNew;
}

function addDigits_PositiveElements(str) {
  let arr = sumOfDigits(filterNegatives(prepArray(str)));
  let sum = 0;
  for (let each of arr) {
    sum += each;
  }
  return sum;
}
// console.log(addDigits_PositiveElements("32, 105,  -22"));
// -------------------------------//------------------------------//

// /* 7.	Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array. */
// describe("filterRange", function () {
//   it("tests [0, 100, 3, 6, -555], 6, 60", function () {
//     assert.strictDeepEqual(arrays.filterRange([0, 100, 3, 6, -555], 6, 60), [
//       100,
//       6,
//     ]);
//   });
// });

// function filterRange(arr, a, b) {
//   let arrNew = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= a && arr[i] <= b) {
//       arrNew.push(arr[i]);
//     }
//   }
//   return arrNew;
// }
function filterRange(arr, a, b) {
  let arrNew = [];
  for (let each of arr) {
    if (each >= a && each <= b) {
      arrNew.push(each);
    }
  }
  return arrNew;
}
// console.log(filterRange([0, 100, 3, 6, -555], 6, 160));
// -------------------------------//------------------------------//
/**
 *
 * @param {string} str string to check for palindrome property
 * @returns {boolean} result true/false depending on palindrome test
 */

// function filterpalindrome(array) {
//   let arrNew = [];
//   for (let i = 0; i < array.length; i++) {
//     let arr = strToArr(array[i]);
//     let result = checkPalindrome(arr);
//     if (result) arrNew.push(array[i]);
//   }
//   return arrNew;
// }

// console.log(filterpalindrome(["not", "a", "kayak", "eagle", "racecar"]));

function filterpalindrome(arr) {
  let array = [];
  for (let each of arr) {
    if (isPalindrome(each)) array.push(each);
  }
  return array;
}

function isPalindrome(str) {
  let isPalindrome = true;
  let isOdd = true;
  let middle;
  if (str.length % 2 === 0) isOdd = false;
  if (isOdd) {
    middle = str.length / 2 - 1;
    console.log(middle);
  } else {
    middle = str.length / 2;
    console.log(middle);
  }

  let j = str.length - 1;
  for (let i = 0; i < middle; i++) {
    if (str[i] !== str[j]) {
      isPalindrome = false;
      console.log("hi false");
    }
    j--;
  }

  return isPalindrome;
}
console.log(isPalindrome("kayak"));

// ____________________________
/**
 *
 * @param {string} str to convert into array
 * @returns {object} arr array converted from string
 */
function strToArr(str) {
  let arr = [];
  for (let each of str) {
    arr.push(each);
  }
  return arr;
}

/**
 *
 * @param {object} arr array to check symmetry of elements
 * @returns {boolean} true/false, depending on test
 */
function checkPalindrome(arr) {
  while (arr.length >= 0) {
    if (arr.length === 1 || arr.length === 0) return true;
    if (arr[0] === arr[arr.length - 1]) {
      arr.shift();
      arr.pop();
    } else return false;
  }
}
// console.log(filterpalindrome("kayak"));
// console.log(filterpalindrome("racecar"));
// console.log(strToArr("kayak"));
// console.log(checkPalindrome([ 'k', 'a', 'y', 'a', 'k' ]));

// -------------------------------//------------------------------//

/**
 *
 * @param {object} arr1 one of the objects to be matrics-added
 * @param {object} arr2 one of the objects to be matrics-added
 * @returns {object} arrNew new array of the matrics sum
 */
function matrixAddition(arr1, arr2) {
  let arrNew = [];
  for (let i = 0; i < arr1.length; i++) {
    let arrSmallNew = [];

    for (let j = 0; j < arr1[i].length; j++) {
      let sum = 0;
      // console.log(arr1[i][j], arr2[i][j]);
      sum = arr1[i][j] + arr2[i][j];
      arrSmallNew.push(sum);
    }
    arrNew.push(arrSmallNew);
  }
  return arrNew;
}
// [[0,1,2],[9,8,7]] and [[6,5,4], [3,4,5]]  should be [ [ 6, 6, 6 ], [ 12, 12, 12 ]
// console.log(matrixAddition([[0,1,2],[9,8,7]],[[6,5,4], [3,4,5]]));
