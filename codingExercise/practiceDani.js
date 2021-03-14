"use strict";
// function theMostRepeated(arr) {
//   let obj = {};
//   let count = 0;
//   for (let i = 1; i < arr.length; i++) {
//     let x = arr[i];
//     if (arr.slice(0, i).includes(arr[i])) {
//       if (obj[x]) obj[x]++;
//       else obj[x] = 2;
//     }
//   }

//   let max;
//   max = Math.max(...Object.values(obj));

//   let arrObj = Object.entries(obj);
//   for (let i = 0; i < arrObj.length; i++) {
//     if (arrObj[i][1] === max) return arrObj[i];
//   }
// }
// console.log(theMostRepeated([1, 2, 3, 2, 2, 3])); //2
// arr.filter

// let user = {
//     name: "John",
//     age: 30,
//     isAdmin: true
//   };

//   for (let key in user) {
//     // keys
//     alert( key );  // name, age, isAdmin
//     // values for the keys
//     alert( user[key] ); // John, 30, true
//   }

// function theMostRepeated(arr) {
//   let arrNew = [];

//   for (let i = 1; i < arr.length; i++) {
//     let sliced = arr.slice(0, i);
//     if (sliced.includes(arr[i])) {
//       if (arrNew.length === 0) {
//         arrNew.push([arr[i], 2]);
//       } else {
//         for (let each of arrNew) {
//           if (each[0] === arr[i]) {
//             console.log(arrNew);
//             arrNew.splice(arrNew.indexOf(each), 1, [arr[i], each[1] + 1]);
//             break;
//           } else {
//             arrNew.push([arr[i], 2]);
//           }
//         }
//       }
//     }
//     // if (i === arr.length - 1) break;
//   }

// return arrNew;
// }
// console.log(theMostRepeated([1, 2, 3, 2, 2, 3, 2, 3])); //2
// console.log();

function existOnlyOnce(arr) {
  let temp;
  let arrNew = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let sliced = arr.slice(0, i);
    if (!sliced.includes(arr[i])) {
      count++;
      temp = arr[i];
    } else {
      count--;
    }
    if (count > 1) {
      arrNew.push(arr[i - 1]);
      count = 1;
    }
  }
  return arrNew;
}
// console.log(existOnlyOnce([9, 9, 4, 4, 6, 6, 7, 7, 3, 22, 22]));
function intersection(arr1, arr2) {
  let arrNew = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      arrNew.push(arr1[i]);
      console.log(arrNew);
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.includes(arr2[i])) {
      arrNew.push(arr2[i]);
      //   console.log(arrNew);
    }
  }
  return arrNew;
}
// console.log(intersection([9, 4, 1, 9, 8, 3], [10, 55, 6, 9, 2, 4]));
let x = ["What", "How", "Where"].filter((s) => s.startsWith("Wh"));
// console.log(x);

// function mostFrequnt(arr) {
//     let count = 0;
//     let frequntElement = arr[0];
//     let count_element = 0;

//     for (let i = 0; i < arr.length; i++) {
//     count_element = countElement(arr, arr[i]);
//     if (count_element > count) {
//     frequntElement = arr[i];
//     count = count_element;
//      }
//      }
//     //if all are equl return random values from the given array
//     if (count === 0) return arr[Math.floor(Math.random() * arr.length)];
//     return frequntElement;
//     }
//     function countElement(arr, n) {
//     let count = -1;
//     for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === n) count++;
//      }
//     return count;
//     }
//     let arr = [3, 5, 6, 7, 8, 9];
//     let arr1 = [3, 5, 6, 7, 8, 9, 3, 6, 6, 7, 8, 3, 9, 6, 6];
//     console.log(mostFrequnt(arr));
//     console.log(mostFrequnt(arr1));

function mostRepeated(arr) {
  let max = -1;
  let mRepElem;
  for (let i = 0; i < arr.length; i++) {
    let temp = countElement(arr, arr[i]);
    if (temp > max) {
      max = temp;
      mRepElem = arr[i];
    }
  }

  return [mRepElem, max];
}

// console.log(mostRepeated([0, 1, 3, 2, 4, 5, 6, 2, 7, 2, 4]));

function countElement(arr, n) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) count++;
  }
  return count;
}
// console.log(countElement([0, 1, 3, 2, 4, 5, 6, 2, 7, 2, 4], 4));
// -------------------------------

function isOddComposite(n) {
  if (n % 2 !== 0) {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) return true;
    }
  }

  return false;
}
// console.log(isOddComposite(21));

function secondSmallest(arr) {
  let minElem = Math.min(...arr);
  arr.splice(arr.indexOf(minElem), 1);
  let secondMin = Math.min(...arr);

  return secondMin;
}
// console.log(secondSmallest([3, 1, 2, 3, 4, 5, 6, 7]));

function stringLengthAve(arr) {
  let sum = 0;
  let ave;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i].length;
  }
  ave = sum / arr.length;
}

let b = 0;
function bar(n) {
  let a = 5;
  if (n >= 0) {
    n = Math.sqrt(n);
  }
  b = a + n;
  console.log(a, b, n);
}
// console.log(b);
// bar(4);
// console.log(b);
// console.log(n);

let m = [
  "rehoboth",
  "amani",
  "alephat",
  "amen",
  "halle",
  "abdissa",
  "selihom",
].map((item) => item.length);
// console.log(m);
let f = [
  "rehoboth",
  "amani",
  "alephat",
  "amen",
  "halle",
  "abdissa",
  "selihom",
].filter((item) => item.startsWith("a"));
// console.log(f);

let even = [1, 2, 3, 5, 4, 6, 8, 7, 9, 8].filter((item) => item % 2 === 0);
// console.log(even);

let sumOfFac = [1, 2, 3, 5, 4, 6, 8, 7, 9, 8].filter(function sumOfFactors(n) {
  let i = 1;
  let sum = 0;
  while (i < n) {
    if (n % i === 0) {
      //   console.log(i);
      sum += i;
    }
    i++;
  }
  return sum;
});
// console.log(sumOfFac);

function sumOfFactors(n) {
  let i = 1;
  let sum = 0;
  while (i < n) {
    if (n % i === 0) {
      //   console.log(i);
      sum += i;
    }
    i++;
  }
  return sum;
}
// console.log(sumOfFactors(8));

let y = "mother, father";
let splitted = y.split("");
// console.log(splitted);
let str = "test";
// console.log(str.split(""));
// ----------------------------------------
function isPrime(n) {
  let isPrime = true;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
}
// console.log(isPrime(5));

function sumAtPrime(arr) {
  let sum = 0;
  let iPrime;
  for (let i = 0; i < arr.length; i++) {
    iPrime = isPrime(i);
    if (i === 0 || i === 1) iPrime = false;
    if (iPrime === true) {
      sum += arr[i];
    }
  }
  return sum;
}
// console.log(sumAtPrime([1, 5, 6, 7, 8, 3]));

function isOdd(n) {
  if (n % 2 === 0) return false;
  return true;
}

function perfectlyOdd(arr) {
  let perfectlyOdd = true;
  for (let i = 1; i < arr.length; i += 2) {
    let check = isOdd(arr[i]);
    if (check === false) perfectlyOdd = false;
  }
  return perfectlyOdd;
}
// console.log(perfectlyOdd([1, 3, 18, 5, 4, 9, 2, 7, 5, 3]));
// let arr = new Array(6);
// arr[0] = "a";
// console.log(arr);
let arr = [1, 3, 18, 5, 4, 9, 2, 7, 5, 3];
// let sliced = arr.slice(1, -2);
// console.log(sliced);
// console.log(arr.toString(""));

// -------------------------------
function power(x, n) {
  if (n === 0) return 1;

  return (1 / x) * power(x, n + 1);
}
// console.log(power(0.5, -3));

// =------------------------=

function countDigits(n) {
  if (n === 0) return 0;

  return 1 + countDigits(Math.floor(n / 10));
}
// console.log(countDigits(1231234));

function reverse(str) {}
