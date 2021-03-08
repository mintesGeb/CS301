"use strict";
/**
 *
 * @param {number} num check if a number is prime
 * @returns {boolean} isPrime true if prime and false if not
 */
function checkPrime(num) {
  let i = 2;
  let isPrime = true;
  while (i < num) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
    i++;
  }
  return isPrime;
}
console.log(checkPrime(49));

/**
 *
 * @param {number} num number to check if the last digit is
 * @returns {boolean} endsInNine check result
 */
function endsIn9(num) {
  let endsInNine = true;
  let lastDigit = num % 10;
  if (lastDigit !== 9) return (endsInNine = false);
  return endsInNine;
}
console.log(endsIn9(139));

function findPorcupineNumber(num) {
  if (endsIn9(num)) {
    for (let i = num + 1; i > num; i++) {
      if (endsIn9(i) && checkPrime(i)) return i;
    }
  }
  return -1;
}
console.log(findPorcupineNumber(39));
