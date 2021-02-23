const prompt = require("prompt-sync")();
let input = prompt("Please enter distance in km: ");

input = parseFloat(input);

const distanceInMiles = 0.621371 * input;

console.log(distanceInMiles);
