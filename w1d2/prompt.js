"use strict";

const prompt = require("prompt-sync")();

// let x = prompt("How old are you? ");
// console.log(x);

let tempInCelsius = prompt("Eneter value in celsius: ");
let tempInFahrenheit = (9 / 5) * parseFloat(tempInCelsius) + 32;
console.log(tempInFahrenheit);
