// ---Defining Table ---

// Input
// -a number to which the user want the fibonacci sequence to go

// Process
// -declare two variables that continually add up and swap value as they continue up the sequence and print value

// Output
// -fibonacci sequence up to the number entered

const prompt = require("prompt-sync")();
const num = prompt(
  "Enter a number to which you want the fibonacci sequence to go: "
);

let a = 1;
let b = 0;
let row = "";
while (b <= num) {
  row += b + ",";
  let sum = a + b;
  b = a;
  a = sum;
}
console.log(row);
