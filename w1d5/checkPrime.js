"use strict";

exports.checkPrime = checkPrime;

const prompt = require("prompt-sync")();
let inputCheck = +prompt("Enter a number to check: ");
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

console.log(checkPrime(inputCheck));
