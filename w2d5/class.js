"use strict";
let arr = [1, 2, 3, 4, 5];

function invert(arr, separator = " ") {
  let reversed = arr.reverse();
  let joined = reversed.join(separator);
  return joined;
}

console.log(invert(["Sam", "am", "I"]));

arr.forEach((item) => console.log(item));
console.log("------------------");
function display(item) {
  console.log(item);
}
arr.forEach(display);
console.log("------------------");

arr = [41, 45, 413, 453, 46, 42];
console.log(arr.sort());

function compare(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
  if (a === b) return 0;
}
console.log(arr.sort(compare));

console.log(
  arr.sort(function (a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    if (a === b) return 0;
  })
);
arr = [41, 45, 413, 453, 46, 42];
console.log(arr.splice(1, 2));
console.log(arr);
console.log("------------------");
arr = [41, 42, 45, 46, 413, 453];
console.log(arr.slice(0, arr.length));

console.log(arr.slice(2, 4));
console.log(arr.slice());
