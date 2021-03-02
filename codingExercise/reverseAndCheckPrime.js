"use strict";
/*
input - num
process - divide by ten, Math.floor

 */

function reverseAndCheckPrime(n) {
  let sum = 0;
  let isPrime = true;

  function reverse(num) {
    while (num > 0) {
      sum = sum * 10 + (num % 10);
      num = Math.floor(num / 10);
    }
    return sum;
  }

  function checkPrime(num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    return isPrime;
  }
  reverse(n);
  checkPrime(sum);

  return isPrime;
}
console.log(reverseAndCheckPrime(13));
