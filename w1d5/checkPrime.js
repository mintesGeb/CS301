const prompt = require("prompt-sync")();
let inputCheck = +prompt("Enter a number to check: ");

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
