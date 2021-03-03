"use strict";

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
