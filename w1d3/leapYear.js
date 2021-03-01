"use strict";

let year = 1800;
let leapYear = true;
if (year % 4 === 0) {
  if (year % 100 === 0 && year % 400 !== 0) {
    leapYear = false;
  }
}
console.log(leapYear);
