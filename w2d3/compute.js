"use strict";

const compute = function (add, num1, num2) {
  return add(num1, num2);
};

function add(n1, n2) {
  return n1 + n2;
}

console.log(compute(add, 2, 3));
