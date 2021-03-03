"use strict";
// 1a. no output
// b. infinity
// c. infinity
// d. infinity
// 2a. 1 2
// b. 1 2 4 5 7 8
/*
Defining table
input - num
process - get the factors including 1, add them to a variable, compare with num 
output - checking result
*/

/**
 *
 * @param {number} num Number to be checked if it perfect number or not
 * @return {boolean} isPerfectNumber True if number is perfect number or false otherwise
 */
const isPerfectNumber = function (num) {
  let sum = 0;
  let isPerfectNumber = false;

  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  if (num === sum) isPerfectNumber = true;

  return isPerfectNumber;
};
console.log(isPerfectNumber);
