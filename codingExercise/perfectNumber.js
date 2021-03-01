"use strict";
function perfectNumber(num) {
  let sum = 1;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  if (sum === num) {
    return true + ` : ${num} is a perfect number`;
  }
  return false + ` : ${num} is not a perfect number`;
}
console.log(perfectNumber(8128));
