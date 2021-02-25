let prompt = require("prompt-sync")();
let guess = prompt("Guess the 4 digit pin; You only have three trials: ");

let count = 0;
let pin = "1223";

while (count !== 3) {
  count++;
  if (count === 3 && guess !== pin) {
    console.log("Sry");
    break;
  } else if (guess !== pin) {
    guess = prompt(
      `Guess the 4 digit pin; You only have ${3 - count} trials: `
    );
  } else {
    console.log("Congrats!");
    break;
  }
}
