let x = 2000;
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
