"use strict";

exports.isPersonEqual = isPersonEqual;
exports.countProperties = countProperties;
exports.checkSpam = checkSpam;
exports.suffix = suffix;
exports.titleCase = titleCase;
exports.getAverageAge = getAverageAge;
exports.sumFirst = sumFirst;

// let car = {
//   make: "Toyota",
//   model: "Camry",
// };
// console.log(car);

// car.model = "Rav4";
// console.log(car);

// car.color = "blue";
// console.log(car);
// delete car.color;
// console.log(car);

// console.log("speed" in car, "model" in car);
// for (let key in car) {
//   console.log(key, car[key]);
// }
// delete car.make;
// console.log(car);

//-------------------

// function isPersonEqual(obj1, obj2) {
//   if (obj1.name !== obj2.name || obj1.age !== obj2.age) return false;
//   return true;
// }
function isPersonEqual(obj1, obj2) {
  if (obj1.name === obj2.name && obj1.age === obj2.age) {
    return true;
  }
  return false;
}
//-------------------

// function countProperties(obj) {
//   let count = 0;
//   for (let prop in obj) {
//     count++;
//   }
//   return count;
// }

function countProperties(obj) {
  let arr = Object.keys(obj);
  return arr.length;
}
//-------------------

// function checkSpam(str) {
//   let spam1 = "lottery";
//   let spam2 = "prize";
//   let isSpam = false;
//   if (str.includes(spam1) || str.includes(spam2)) {
//     isSpam = true;
//   }
//   return isSpam;
// }

// console.log(checkSpam("mdfglotterydfgm"));

function checkSpam(str) {
  if (str.includes("lottery") || str.includes("prize")) return true;
  return false;
}

//-------------------
/**
 *
 * @param {string} str1 string to find suffix
 * @param {string} str2 string to find suffix
 * @returns {string} suf suffix o fthe strings;
 */
// function suffix(str1, str2) {
//   let sufIndex;
//   let suf;
//   let str1Counter = str1.length - 1;
//   let str2Counter = str2.length - 1;
//   if (str1[str1Counter] !== str2[str2Counter]) return "";
//   while (Math.min(str1Counter, str2Counter) > 0) {
//     if (str1[str1Counter] === str2[str2Counter]) {
//       sufIndex = str1Counter;
//       str1Counter--;
//       str2Counter--;
//     } else break;
//   }
//   suf = str1.substr(sufIndex, str1Counter);
//   return suf;
// }
// console.log(suffix("swimming", "walking"));
// console.log(suffix("jackson", "johnson"));
// console.log(suffix("wholesome", "hohnson"));

function suffix(str1, str2) {
  if (str1.slice(-1) !== str2.slice(-1)) return "";
  return suffix(str1.slice(0, -1), str2.slice(0, -1)) + str1.slice(-1);
}

//-------------------
/**
 *
 * @param {*} s
 * @returns
 */
// function titleCase(s) {
//   let cap = s.slice(0, 1).toUpperCase();

//   return cap + s.slice(1);
// }
// console.log(titleCase("run"));

// let a = "jump";
// let b = a.slice(0, 1).toUpperCase() + a.slice(1);
// console.log(b);

function titleCase(s) {
  let str = s.toLowerCase();
  return str[0].toUpperCase() + str.substr(1);
}
//-------------------
/**
 *
 * @param {object} users array of object to get age of users from
 * @returns {number} ave average of age of users
 */
// function getAverageAge(users) {
//   let ave = (users[0].age + users[1].age) / 2;
//   return ave;
// }
// console.log(
//   getAverageAge([
//     { name: "abc", age: 20 },
//     { name: "xyz", age: 10 },
//   ])
// );

function getAverageAge(arr) {
  let averageAge;
  let sum = 0;
  for (let element of arr) {
    sum += element.age;
  }
  averageAge = sum / arr.length;
  return averageAge;
}

//-------------------
/**
 *
 * @param {object} arr array containing multiple arrays inside
 * @returns {number} sum sum of the first element of each array inside the guven array
 */
// function sumFirst(arr) {
//   let sum = 0;
//   for (let element of arr) {
//     sum += element[0];
//   }
//   return sum;
// }
// console.log(
//   sumFirst([
//     [1, 2],
//     [3, 4],
//     [5, 6],
//   ])
// );

function sumFirst(arr) {
  let sum = 0;
  for (let element of arr) {
    sum += element[0];
  }
  return sum;
}
let x = "   asdf  ";
console.log(x.trim());
