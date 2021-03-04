"use strict";

exports.checkPrimeNumbers = checkPrime;
exports.power = pow;
exports.volumeOfHouse = volumeOfHouse;
exports.gcf = greatestCommonFactor;
exports.lcm = leastCommonMultiple;

// const prompt = require("prompt-sync")();
// let inputCheck = +prompt("Enter a number to check: ");
/**
 *
 * @param {number} num Number to be checked if prime  or not
 * @return {boolean} isPrime Returns True if the number is prime or false otherwise
 */

function checkPrime(num) {
  let isPrime = true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
}

// console.log(checkPrime(inputCheck));
// ---------------------------------------------------------
/**
 *
 * @param {number} n Number to be powered
 * @param {number} p Number that raises the powered
 * @return {number} powered n raised to p result
 */
function pow(n, p) {
  let i = 1;
  let powered = 1;
  while (i <= p) {
    powered *= n;
    i++;
  }
  return powered;
}
//   console.log(pow(2, 3));
// ---------------------------------------------------------
/**
 *
 * @param {number} width width of the base of the house
 * @param {number} depth depth of the base of the house
 * @param {number} height height of the base of the house
 * @return {number} volume volume of the base of the house
 */
function volumeOfBase(width, depth, height) {
  const volume = width * height * depth;
  return volume;
}

/**
 *
 * @param {number} width width of the roof of the house
 * @param {number} depth depth of the roof of the house
 * @param {number} sweep sweep of the roof of the house
 * @return {number} volume volume of the roof of the house
 */

function volumeOfRoof(width, depth, sweep) {
  const volume = areaTriangle(sweep, sweep, width) * depth;
  return volume;
}

/**
 *
 * @param {number} side1 one of the three sides of the triangle of the roof
 * @param {number} side2 one of the three sides of the triangle of the roof
 * @param {number} side3 one of the three sides of the triangle of the roof
 */
function areaTriangle(side1, side2, side3) {
  return (side1 + side2 + side3) / 2;
}
/**
 * @return {number} volume total volume of the house
 */
function volumeOfHouse(w, d, h, s) {
  let volumeTotal = volumeOfBase(w, d, h) + volumeOfRoof(w, d, s);
  return volumeTotal;
}

// ---------------------------------------------------------

/**
 *
 * @param {number} num1 The first number to look for factors of
 * @param {number} num2 The second number to look for factors of
 * @return {number} largest The greates common factor of nim1 & num2
 */
function greatestCommonFactor(num1, num2) {
  let largest = 0;
  for (let i = 2; i <= Math.min(num1 / 2, num2 / 2); i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      largest = i;
    }
  }
  return largest;
}
// ---------------------------------------------------------

/**
 *
 * @param {number} num1 one of the numbers lcm will be looked for
 * @param {number} num2 one of the numbers lcm will be looked for
 * @return {number} leastCommonMultiple the least Common Multiple fot the numbers
 */

function leastCommonMultiple(num1, num2) {
  let leastCommonMultiple = num1 * num2;

  const maxNumber = Math.max(num1, num2);
  const minNumber = Math.min(num1, num2);

  if (maxNumber % minNumber === 0) {
    leastCommonMultiple = maxNumber;
    return leastCommonMultiple;
  }

  for (let i = 2 * maxNumber; i < num1 * num2; i++) {
    if (i % num1 === 0 && i % num2 === 0) {
      leastCommonMultiple = i;
      break;
    }
  }
  return leastCommonMultiple;
}

// ---------------------------------------------------------
