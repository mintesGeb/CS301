// 1a. 0
// b. infinity
// c. infinity
// d. infinity
// 2a. //nothing will be printed
// b. 4 5 7 8

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
