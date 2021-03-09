"use strict";

function fac(n) {
  if (n === 1) return 1;
  return n * fac(n - 1);
}
// console.log(fac(5));

function factorial(n) {
  let fac = 1;
  for (let i = n; i > 0; i--) {
    fac *= i;
  }
  return fac;
}
// console.log(factorial(5));

function fib(n) {
  if (n === 0) return 0;
  else if (n === 1) return 1;
  else {
    const nextFib = fib(n - 1) + fib(n - 2);
    return nextFib;
  }
}
// console.log(fib(6));

function palindrome(str) {
  if (str.length === 0 || str.length === 1) return true;
  else {
    if (str[0] === str[str.length - 1]) {
      return palindrome(str.substr(1, str.length - 2));
    }
  }
  return false;
}
console.log(palindrome("kayak"));

function strLength(str) {
  if (str === "") {
    return 0;
  } else {
    return 1 + strLength(str.substr(1));
  }
}
// console.log(strLength("sdfdf"));
