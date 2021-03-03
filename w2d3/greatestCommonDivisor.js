"use strict";
/**
 *
 * @param {*} num1
 * @param {*} num2
 */
const greatestCommonFactor = function (num1, num2) {
  let largest = 0;
  for (let i = 2; i <= Math.min(num1 / 2, num2 / 2); i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      largest = i;
    }
  }
  return largest;
};
console.log(greatestCommonFactor(98, 56));
