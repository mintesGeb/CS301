const prompt = require("prompt-sync")();
let inputHeight = prompt("Please enter the height of the cylinder: ");
let inputRadius = prompt("Please enter the radius of a cylinder: ");

inputHeight = parseFloat(inputHeight);
inputRadius = parseFloat(inputHeight);

const volume = Math.PI * Math.pow(inputRadius, 2) * inputHeight;

console.log(volume);
