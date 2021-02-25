let prompt = require("prompt-sync")();

// --- Table ---
// input - initial amount, annual interest rate, number of years
//  process - calculate interest - add to the balance for each year to add to the total
// output - total amount and total interest

let balance = +prompt("What is the initial deposite: ");
let interestRateAnnualy = +prompt("What is the annual interest: ");
let years = +prompt("What is the number of years to calculate: ");

let monthlyRate = interestRateAnnualy / 1200;
let months = years * 12;

let interest;

for (let i = 0; i < months; i++) {
  interest = balance * monthlyRate;
  balance += interest;
}

console.log(`balance after ${years} years is ${balance}`);
