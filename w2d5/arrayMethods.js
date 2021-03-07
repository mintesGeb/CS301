"use strict";

exports.insertArray = spliceInsert;
exports.isArrayEqual = isArrayEqual;
exports.isPalindrome = isPalindrome;
exports.reverse2String = reverseAndJoin;
exports.enhancedIncludes = enhancedIncludes;
exports.ssReverse = ssReverse;
exports.mergeTwo = mergeTwo;

// --------------------------- // --------------------------- //
function spliceInsert(n, arr1, arr2) {
  for (let element of arr2) {
    arr1.splice(n, 0, element);
    n++;
  }
  return arr1;
}
// console.log(spliceInsert(2, [1, 2, 6], [3, 4, 5]));

// let x = [1, 2, 4];
// x.splice(2, 0, 3);
// console.log(x);

// --------------------------- // --------------------------- //
function isArrayEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    // if (!arr2.includes(arr1[i])) return false;
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

let array1 = [0, 1, 2];
let array2 = [2, 1, 0];
let array3 = [0, 1, 2];

// console.log(isArrayEqual(array1, array3));

// console.log(array2.includes(1));
// --------------------------- // --------------------------- //
function isPalindrome(arr) {
  let newArr = arr.slice();

  let reversed = newArr.reverse();
  const checkResult = isArrayEqual(newArr, arr);
  return checkResult;
}
// console.log(isPalindrome([2, 3, 3, 2, 1]));
// --------------------------- // --------------------------- //

function reverse(arr) {
  return arr.reverse();
}

function join(arr) {
  return arr.join("_");
}

function reverseAndJoin(arr) {
  return join(reverse(arr));
}
// console.log(reverseAndJoin(["Quick", "Brown", "Fox"]));
// --------------------------- // --------------------------- //
function enhancedIncludes(arr, n) {
  let exists = arr.includes(n);
  let arrIndex = [];

  let i = 0;

  while (i < arr.length) {
    if (arr[i] === n) {
      arrIndex.push(i);
    }
    i++;
  }

  arrIndex = arrIndex.slice(0, 1).concat(arrIndex.slice(-1));
  arrIndex.unshift(exists);

  return arrIndex;
}
// console.log(enhancedIncludes([1, 4, 2, 3, 4, 5], 4));
// --------------------------- // --------------------------- //
function ssReverse(arr) {
  let arrNew = [];
  for (let i = arr.length; i > 0; i--) {
    arr = arr.slice(0, i);
    let sliced = arr.slice(i - 1);
    arrNew = arrNew.concat(sliced);
  }

  return arrNew;
}

// console.log(ssReverse([1, 2, 3, 4, 5, 6]));

// let x = [];
// let y = x.slice(0, -1);
// y.splice(0, 0, x[x.length - 1]);

// console.log(x.concat([7]))

// --------------------------- // --------------------------- //

// Given an expression array exp, write a program to examine whether the pairs
// and the orders of “{“, “}”, “(“, “)”, “[“, “]” are correct in exp.
//
// Example:
// Input: exp = ["(", ")", "[", "{", "}", "]"]
// Output: Balanced
// Input: exp = ["[", "(", "]", ")"]
// Output: Not Balanced
function orderRight(exp) {
  let curly = 0;
  let parenth = 0;
  let bress = 0;

  let balanceStatus = true;
  for (let i = 0; i < exp.length; i++) {
    if (exp[i] === "{") {
      culrly++;
    } else if (exp[i] === "(") {
      parenth++;
    } else if (exp[i] === "[") {
      bress++;
    }

    for (let j = i + 1; j < exp.length; j + 2) {
      if (exp[j] === "}") {
        culrly--;
        exp.slice(j, j + 1);
        break;
      } else if (exp[j] === ")") {
        parenth--;
        break;
      } else if (exp[j] === "]") {
        bress--;
        break;
      }
    }

    if (curly !== 0 || parenth !== 0 || bress !== 0) {
      balanceStatus = false;
    }
  }

  balanceStatus;
}
// console.log(orderRight(["(", ")", "[", "{", "}", "]"]));

// let curly;
// let parenth;
// let bress;

// if (exp[i] === "{") curlyStatus = "open";
// else if (exp[i] === "(") parenth = "open";
// else if (exp[i] === "[") bress = "open";

// if (exp[i] === "{" || exp[i] === "(" || exp[i] === "[") {
//   status = "open";
//   balanceStatus = "Not Balanced";
// }
// --------------------------- // --------------------------- //
function mergeTwo(arr1, arr2) {
  for (let each of arr2) {
    arr1.push(each);
  }
  arr1.sort(comparator);
  return arr1;
}

console.log(mergeTwo([1, 3, 8], [0, 5, 9]));
// let a = [33, 512, 23, 23, 6, 323, 53, 24];
// let x = a.sort(comparator);

// console.log(x);

function comparator(a, b) {
  if (a > b) return 1;
  if (a === b) return 0;
  if (a < b) return -1;
}
// --------------------------- // --------------------------- //
