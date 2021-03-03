"use strict";

const greatestCommonFactor = function (num1, num2) {
  let largest = 0;
  for (let i = 2; i <= Math.max(num1 / 2, num2 / 2); i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      largest = i;
    }
  }
  return largest;
};

const leastCommonMultiple = function (num1, num2) {
  let lcm = (num1 * num2) / greatestCommonFactor(num1, num2);
  return lcm;
};
console.log(leastCommonMultiple(20, 10));
