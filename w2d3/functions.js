"use strict";

exports.checkPrime = checkPrime;
exports.power = pow;

// const prompt = require("prompt-sync")();
// let inputCheck = +prompt("Enter a number to check: ");
/**
 *
 * @param {number} num Number to be checked if prime  or not
 * @return {boolean} isPrime Returns True if the number is prime or false otherwise
 */

function checkPrime(num) {
  let isPrime = true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
}

// console.log(checkPrime(inputCheck));

/**
 *
 * @param {number} n Number to be powered
 * @param {number} p Number that raises the powered
 * @return {number} powered n raised to p result
 */
function pow(n, p) {
  let i = 1;
  let powered = 1;
  while (i <= p) {
    powered *= n;
    i++;
  }
  return powered;
}
//   console.log(pow(2, 3));
