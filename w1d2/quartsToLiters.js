const prompt = require("prompt-sync")();
let input = prompt("Enter the volume in quarts: ");

input = parseFloat(input);

const volInLit = (32 / 33.814) * input;

console.log(volInLit);
