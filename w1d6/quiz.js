"use strict";

// function isReversed(n) {
//   let sum = "";
//   let isPrime = true;
//   function reverse(num) {
//     let str = num.toString();

//     for (let i = 1; i <= str.length; i++) {
//       sum += str[str.length - i];
//     }
//     return sum;
//   }

//   function checkPrime(num) {
//     for (let i = 2; i < num; i++) {
//       if (num % i === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//   }
//   reverse(n);
//   checkPrime(sum);
//   return isPrime;
// }

// console.log(isReversed(32));

// function reverse(num) {
//   let reversedNumber = 0;

//   while (num > 0) {
//     let digit = num % 10;
//     num = Math.floor(num / 10);
//     reversedNumber = reversedNumber * 10 + digit;
//   }
//   return reversedNumber;
// }
// console.log(reverse(32));
