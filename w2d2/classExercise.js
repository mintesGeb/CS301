"use strict";

// let isEven = (n) => {
//   return n % 2 === 0;
// };

// console.log(isEven(10));

// function triangleArea(a, b, c) {
//   let s = semiPerimeter(1, 2, 3);
//   let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
//   return area;
// }

// function semiPerimeter(x, y, z) {
//   let semiPerimeter = (x + y + z) / 2;
//   return semiPerimeter;
// }
// console.log(triangleArea(1, 2, 3));

function b() {
  function a() {
    console.log(x);
  }
  x = 5;
  a();
  console.log(x);
}
let x = 20;
b();
