const prompt = require("prompt-sync")();

let inputAge = +prompt("Please enter the child's age: ");
let inputSeason = prompt("Please enter the time of the season: ");

inputSeason = inputSeason.toLowerCase();

if (inputAge <= 5) {
  if (inputSeason === "summer" || inputSeason === "fall") {
    bedtime = "8:30 PM";
  } else {
    bedtime = "8:00 PM";
  }
} else if (inputAge < 13) {
  if (inputSeason === "summer") {
    bedtime = "9:30 PM";
  } else {
    bedtime = "8:30 PM";
  }
} else {
  if (inputSeason === "summer") {
    bedtime = "10:30 PM";
  } else {
    bedtime = "9:30 PM";
  }
}
console.log(
  `The apprpriate bedtime for a child of age ${inputAge} in the ${inputSeason} is ${bedtime}`
);
