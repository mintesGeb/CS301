"use strict";
// 1a. no output
// b. infinity
// c. infinity
// d. infinity
// 2a. 1 2
// b. 1 2 4 5 7 8
/*
Defining table
input - num
process - get the factors including 1, add them to a variable, compare with num 
output - checking result
*/
let num = 8128;
let sum = 0;
let isPerfectNumber = false;

for (let i = 1; i < num; i++) {
  if (num % i === 0) {
    sum += i;
  }
}
if (num === sum) isPerfectNumber = true;

console.log(isPerfectNumber);
