"use strict";

// jsdoc
/**
 *
 * @param {number} num1 one of the numbers lcm will be looked for
 * @param {number} num2 one of the numbers lcm will be looked for
 * @return {number} leastCommonMultiple the least Common Multiple fot the numbers
 */

const leastCommonMultiple = function (num1, num2) {
  let leastCommonMultiple = num1 * num2;

  const maxNumber = Math.max(num1, num2);
  const minNumber = Math.min(num1, num2);

  if (maxNumber % minNumber === 0) {
    leastCommonMultiple = maxNumber;
    return leastCommonMultiple;
  }

  for (let i = 2 * maxNumber; i < num1 * num2; i++) {
    if (i % num1 === 0 && i % num2 === 0) {
      leastCommonMultiple = i;
      break;
    }
  }
  return leastCommonMultiple;
};
console.log(leastCommonMultiple(2, 6));
