let prompt = require("prompt-sync")();

let inputTestCase = +prompt(
  "Please enter a number to check if its prime or not: "
);

let isPrime = true;
let count = 0;

for (let i = 2; i < inputTestCase; i++) {
  if (inputTestCase % i === 0) {
    count++;
  }
  if (count !== 0) {
    isPrime = false;
    break;
  }
}
console.log(isPrime);
