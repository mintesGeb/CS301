const prompt = require("prompt-sync")();

let inputTotal = prompt("Please enter the total number of boxes: ");

let inputStackSize = prompt(
  "Please enter how many boxes you want in each stack: "
);

inputTotal = parseInt(inputTotal);
inputStackSize = parseInt(inputStackSize);

let numberOfStack = Math.floor(inputTotal / inputStackSize);
let rem = inputTotal % inputStackSize;

if (rem === 0) {
  console.log(
    `You need ${numberOfStack} stacks to store a total of ${inputTotal} boxes in a stack size of ${inputStackSize} boxes`
  );
} else {
  console.log(
    `You need ${numberOfStack} stacks of ${inputStackSize} boxes and one stack of ${rem} boxes to store a total of ${inputTotal} boxes`
  );
}
