"use strict";
/* eslint-disable */
exports.power = pow;
exports.countDigits = countDigit;
exports.reverse = reverseStr;

function swap(a, b) {
  let temp = a;
  a = b;
  b = temp;
  return [a, b];
}
// console.log(swap(5, 7));

function pow(x, n) {
  if (n === 1) return x;
  return (x *= pow(x, n - 1));
}
// console.log(pow(2, 5));

function countDigit(num) {
  if (num < 10) return 1;
  else {
    return 1 + countDigit(Math.floor(num / 10));
  }
}
console.log(countDigit(32521));

// let count = 1;
// function countDigits(n) {
//   if (n < 10) return 1;
//   count += 1;
//   n = Math.floor(n / 10);
//   countDigits(n);
//   return count;
// }
// console.log(countDigits(12653));

function reverseStr(str) {
  if (str === "") return "";
  else {
    return str.slice(-1) + reverseStr(str.slice(0, -1));
  }
}
// console.log(reverseStr("mintes"));
