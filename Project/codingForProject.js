"use strict";
// eslint-disable;

// ?---------- 1 --- not done
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
// console.log(checkPrime(49));

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
// console.log(endsIn9(139));

function nextPrimeNumEndingIn9(num) {
  let arr = [];
  for (let i = num + 1; i < 150; i++) {
    if (checkPrime(i) && endsIn9(i)) {
      arr.push(i);
    }
  }
  return arr;
}
// console.log(nextPrimeNumEndingIn9(50));

// function countPrimesInBetween(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = arr[i]; j < arr[i + 1]; j++) {
//       if (checkPrime(j)) break;
//     }
//   }
// }

/**
 *
 * @param {number} num number to start from while finding the next porcupine
 * @returns {number} arr[0] the porcupine number
 */
function findPorcupineNumber(num) {}
// console.log(findPorcupineNumber(39));

// ?---------- 2 ---- done

function addToTarget(arr, num) {
  let array = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + arr[i + 1] === num) {
      array.push(i);
      array.push(i + 1);
    }
  }
  return array;
}
// console.log(addToTarget([2, 7, 11, 15], 9));

// ?---------- 3 ----  done

function mostFrequent(arr) {
  let maxChar;
  let max = 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    count = 0;
    for (let each of arr) {
      if (arr[i] === each) {
        count++;
      }
    }
    if (count > max) {
      max = count;
      maxChar = arr[i];
    }
  }
  return maxChar;
}
// console.log(mostFrequent([4, 3, 6, 67, 8, 3, 6, 8, 4, 6, 9, 3, 6, 4]));

// ?---------- 4 ---- not done --- recheck

function closestToZero(arr) {
  let array = [];
  let min = Infinity;
  let max = -Infinity;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let sum = arr[i] + arr[j];
      if (sum === 0) {
        array[0] = arr[i];
        array[1] = arr[j];
        return array;
      } else if (sum > 0) {
        if (sum < min) {
          min = sum;
          array[0] = arr[i];
          array[1] = arr[j];
        }
      } else {
        if (Math.abs(sum) < min) {
          min = sum;
          array[0] = arr[i];
          array[1] = arr[j];
        }
      }
    }
  }
  return array;
}
console.log(closestToZero([4, -1, -2, -3]));
