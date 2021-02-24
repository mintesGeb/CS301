"use strict";

let prompt = require("prompt-sync")();
let inputWeather = prompt("What is the weather like outside? ");

let footwear;

switch (inputWeather) {
  case "hot":
    footwear = "sandals";
  // break;
  case "rain":
    footwear = "galoshes";
    break;
  case "snow":
    footwear = "boots";
    break;
  default:
    footwear = "sneakers";
    break;
}
console.log(`Please wear ${footwear} because the weather is ${inputWeather}.`);
