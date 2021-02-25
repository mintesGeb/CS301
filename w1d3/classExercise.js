"use strict";
const prompt = require("prompt-sync")();

// -----Line break----

// let inputWeather = prompt("What is the weather like today? ");

// if (inputWeather === "rainy") {
//   console.log("Get an Umbrella");
// }

// -----Line break----

// let inputNumber = +prompt("please enter a number between 1 and 10: ");
// if (inputNumber === 7) {
//   console.log("Bingo!");
// } else {
//   console.log("Try again.");
// }

// -----Line break----

// let num = prompt("Please enter a number between 0 and 4: ");

// switch (num) {
//   case "1":
//     console.log("one");
//     break;
//   case "2":
//     console.log("two");
//     break;
//   case "3":
//     console.log("three");
//   default:
//     console.log("try again");
// }

// -----Line break----
// let inputEmpType = prompt(
//   "what is your employment type? press a : if salaried or press b : not salaried  "
// );
// let inputSales = prompt("How much did you sale ? ");
// let commission;
// if (inputEmpType === "a") {
//   if (sales < 300) {
//     commission = 0;
//   } else if (sales > 300 && saless < 500) {
//     commission = 0.01 * sales;
//   } else {
//     commission = 0.02 * sales;
//   }
// } else {
//   if (sales >= 300 && saless <= 500) {
//     commission = 0.01 * sales;
//   } else {
//     commission = 0.02 * sales;
//   }
// }

// let inputAge = +prompt("please ente your age: ");

// if (inputAge <= 0) {
//   console.log("please enter valid age ");
// } else if (inputAge < 14) {
//   console.log("You cant drive yet");
// } else if (inputAge < 19) {
//   console.log("You can drive under supervision");
// } else {
//   console.log("You can drive");
// }

// var foo = 0;
// switch (foo) {
//   case -1:
//     console.log("negative 1");
//     break;
//   case 0:
//     console.log(0);
//   case 1:
//     console.log(1);
//     break;
//   case 2:
//     console.log(2);
//     break;
//   default:
//     console.log("default");
// }
// Write a program to get an integer input from user and outputs if the
// entered number is even or odd.

let num = +prompt("Please enter a number to check if it's even or odd: ");

if (num % 2 === 0) {
  console.log(num + " is even");
} else {
  console.log(num + " is odd");
}
