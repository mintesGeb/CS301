const prompt = require("prompt-sync")();
let inputCost = +prompt("What is the cost of the house? ");

let downpayment;

if (inputCost > 0 && inputCost < 50000) {
  downpayment = 0.05 * inputCost;
} else if (inputCost < 100000) {
  downpayment = 1000 + 0.1 * (inputCost - 50000);
} else if (inputCost < 200000) {
  downpayment = 2000 + 0.15 * (inputCost - 100000);
} else {
  downpayment = 5000 + 0.1 * (inputCost - 200000);
}
console.log(
  `The downpayment for the house that costs ${inputCost} is ${downpayment}`
);
