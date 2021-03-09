"use strict";
/* eslint-disable; */
exports.findPorcupineNumber = findPorcupineNumber;
exports.exports.addToTarget = addToTarget;
exports.mostFrequent = mostFrequent;
exports.closestToZero = closestToZero;
exports.addTwoNumbers = addTwoNumbers;

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
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === num) {
        array.push(i);
        array.push(j);
      }
      if (array.length === 2) return array;
    }
  }
  return array;
}
// console.log(addToTarget([2, 7, 11, 15], 9));
// console.log(addToTarget([2, 3, 4], 6));

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
// console.log(mostFrequent([4, 3, 6, 8, 3, 8, 4, 9, 6, 4]));

// ?---------- 4 ----  done

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
console.log(closestToZero([1, 4, -1, -2, -5]));
console.log(closestToZero([4, 2, -1, 3, -2, -3]));

// ?---------- 5 ----   done

function addTwoNumbers(arr1, arr2) {
  let arrNew = [];
  let arr1Joined = Number(arr1.join(""));
  let arr2Joined = Number(arr2.join(""));
  let sum = arr1Joined + arr2Joined;
  for (let each of String(sum)) {
    arrNew.push(Number(each));
  }
  return arrNew;
}

console.log(addTwoNumbers([3, 4, 2], [4, 6, 5]));
console.log(addTwoNumbers([1, 1], [9, 9]));
console.log(addTwoNumbers([1, 1], [1, 2, 3]));

// ?---------- 6 ----  nod done
// function binaryAddition(str1, str2) {
//   str1 = Number(str1);
//   str2 = Number(str2);
//   let strAdd = "";
//   for (let i = Math.max(str1.length, str2.length); i > 0; i--) {
//     let sum = 0;
//     let addOnNext = 0;
//     let operand1 = str1[i];
//     let operand2 = str2[i];
//     if (operand1 === undefined) str1[i] = 0;
//     if (operand2 === undefined) str2[i] = 0;

//     if (str1[i] === 0 && str2[i] === 0) {
//       sum = 0;
//       strAdd += String(sum);
//     } else if (str1[i] === 1 || str2[i] === 1){
//       sum = 1;
//       strAdd += String(sum);
//     }
//     if (str1[i] === 1 && str2[i] === 1) {
//       sum = 0;
//       strAdd+=sum;
//       addOnNext = 1;
//     }
//   }
// }
// ?---------- 7 ----  nod done

// ?---------- 8 ----  nod done

// ?---------- 9 ----  nod done

// ?---------- 10 ----  nod done
