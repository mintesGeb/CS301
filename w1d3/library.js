const prompt = require("prompt-sync")();
let inputStatus = prompt("Please enter your status at the University: ");
const inputOverdue = +prompt("How many books do you have overdue? ");

inputStatus = inputStatus.toLowerCase();
let loanDuration;

if (inputStatus === "student") {
  if (inputOverdue === 0) {
    loanDuration = 6;
  } else if (inputOverdue < 3) {
    loanDuration = 4;
  } else {
    loanDuration = 2;
  }
} else if (inputStatus === "faculty") {
  if (inputOverdue === 0) {
    loanDuration = 12;
  } else if (inputOverdue < 3) {
    loanDuration = 10;
  } else {
    loanDuration = 8;
  }
} else {
  if (inputOverdue === 0) {
    loanDuration = 4;
  } else if (inputOverdue < 3) {
    loanDuration = 3;
  } else {
    loanDuration = 2;
  }
}
console.log("You can borrow this book for " + loanDuration + " weeks");
