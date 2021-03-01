"use strict";
/*
input - num
process - divide by ten, Math.floor

 */

function reverse(num) {
  let sum = 0;
  while (num > 0) {
    sum = sum * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return sum;
}
console.log(reverse(879));
