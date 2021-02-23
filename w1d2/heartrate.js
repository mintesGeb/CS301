const prompt = require("prompt-sync")();
let inputAge = prompt("PLease enter your age: ");

inputAge = parseInt(inputAge);

const heartrateMax = 220 - inputAge;

let rangeMin = 0.65 * heartrateMax;
let rangeMax = 0.85 * heartrateMax;

console.log(
  `Keep heartrate between ${rangeMin} and ${rangeMax} when you exercise, to strengthen your heart.`
);
