let prompt = require("prompt-sync")();

let num = +prompt("Please enter a number to factorial: ");
let fac = 1;
for (let i = num; i > 0; i--) {
  fac *= i;
}
console.log(fac);
