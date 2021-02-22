"use strict";

onsole.log("Mintes");

// console.log(isPrime(9));

function printPrimeNumbers(num) {
  let arr = [];
  let i = 2;
  while (arr.length < num) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) isPrime = false;
    }
    if (isPrime === true) arr.push(i);
    i++;
  }
  return arr;
}

console.log(printPrimeNumbers(10));
