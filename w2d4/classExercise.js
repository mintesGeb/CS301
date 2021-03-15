"use strict";

const { find } = require("lodash");
const { arrayReplaceAt } = require("markdown-it/lib/common/utils");

const scores = [10, 20, 30, 40, 50];

function findAverage(arr) {
  let ave;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  ave = sum / arr.length;
  return ave;
}
let average = findAverage(scores);
console.log(average);

let arrRandom = [];
for (let i = 0; i < 10; i++) {
  let random = Math.floor(Math.random() * 10) + 1;
  arrRandom.push(random);
}
console.log(arrRandom);
console.log(findAverage(arrRandom));

let x = "32, 105,  -22";
let y = x.split(",");
console.log();
let arrNew = [];
for (let each of y) {
  arrNew.push(each.trim());
}
console.log(arrNew);
