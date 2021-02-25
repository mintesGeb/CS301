let prompt = require("prompt-sync")();
let age;
do {
  age = +prompt("How old are you: ");
} while (age < 18);
console.log("You are finally " + age);
