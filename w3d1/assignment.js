"use strict";

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
//   if (obj1.name !== obj2.name && obj1.age !== obj2.age) return false;
//   return true;
// }

//-------------------

// function countProperties(obj) {
//   let count = 0;
//   for (let prop in obj) {
//     count++;
//   }
//   return count;
// }

//-------------------

function checkSpam(str) {
  let spam1 = "lottery";
  let spam2 = "prize";
  let isSpam = false;
  if (str.includes(spam1) || str.includes(spam2)) {
    isSpam = true;
  }
  return isSpam;
}

// console.log(checkSpam("mdfglotterydfgm"));

//-------------------

function suffix(str1, str2) {
  let suffix;
  let str1Counter = str1.length - 1;
  let str2Counter = str2.length - 1;
  while (Math.min(str1Counter, str2Counter) > 0) {
    if (str1[str1Counter] === str2[str2Counter]) {
      suffix = str1Counter;
      str1Counter--;
      str2Counter--;
    } else break;
  }

  return str1.substr(suffix, str1Counter);
}
// console.log(suffix("swimming", "walking"));

//-------------------
/**
 *
 * @param {*} s
 * @returns
 */
function titleCase(s) {
  let cap = s.slice(0, 1).toUpperCase();

  return cap + s.slice(1);
}
console.log(titleCase("run"));

let a = "jump";
let b = a.slice(0, 1).toUpperCase() + a.slice(1);
console.log(b);

//-------------------
/**
 *
 * @param {object} users array of object to get age of users from
 * @returns {number} ave average of age of users
 */
function getAverageAge(users) {
  let ave = (users[0].age + users[1].age) / 2;
  return ave;
}
console.log(
  getAverageAge([
    { name: "abc", age: 20 },
    { name: "xyz", age: 10 },
  ])
);

//-------------------
/**
 *
 * @param {object} arr array containing multiple arrays inside
 * @returns {number} sum sum of the first element of each array inside the guven array
 */
function sum(arr) {
  let sum = 0;
  for (let element of arr) {
    sum += element[0];
  }
  return sum;
}
console.log(
  sum([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
);
