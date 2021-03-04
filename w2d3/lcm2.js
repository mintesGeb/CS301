"use strict";

/**
 *
 * @param {number} num1 look for gcf
 * @param {number} num2 look for gcf
 * @return {number} largest
 */
const greatestCommonFactor = function (num1, num2) {
  let largest = 0;
  for (let i = 2; i <= Math.max(num1 / 2, num2 / 2); i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      largest = i;
    }
  }
  return largest;
};

/**
 *
 * @param {number} num1 look for thier least common multiplier
 * @param {number} num2 look for thier least common multiplier
 * @return {number} lcm the lcm
 */

const leastCommonMultiple = function (num1, num2) {
  let lcm = (num1 * num2) / greatestCommonFactor(num1, num2);
  return lcm;
};
console.log(leastCommonMultiple(20, 10));
