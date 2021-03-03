"use strict";

// const compute = function (add, num1, num2) {
//   return add(num1, num2);
// };

// function add(n1, n2) {
//   return n1 + n2;
// }

// console.log(compute(add, 2, 3));
// const compute = function (add, num1, num2) {
//   return add(num1, num2);
// };

// function add(n1, n2) {
//   return n1 + n2;
// }

let compute = function (add, x, y) {
  return add(x, y);
};
console.log(
  compute(
    function (n1, n2) {
      return n1 + n2;
    },
    2,
    5
  )
);
