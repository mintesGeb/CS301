let prompt = require("prompt-sync")();
let x = +prompt("Enter year to check: ");
let leapYear;

if (x % 4 === 0) {
  if (x % 100 === 0) {
    if (x % 400 === 0) {
      leapYear = true;
    } else {
      leapYear = false;
    }
  } else {
    leapYear = true;
  }
} else {
  leapYear = false;
}
console.log(leapYear);
