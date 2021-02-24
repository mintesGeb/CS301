const prompt = require("prompt-sync")();
let inputName = prompt("Please enter your name: ");
let inputCredits = +prompt("How many credits have you completed? ");

if (inputCredits > 0 && inputCredits < 30) {
  label = "Freshman";
} else if (inputCredits < 60) {
  label = "Sophomore";
} else if (inputCredits < 90) {
  label = "Junior";
} else {
  label = "Senior";
}

console.log(
  `Student , ${inputName}, is a ${label}, because he has completed ${inputCredits} credits.`
);
