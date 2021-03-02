// let x = 102;
// let sum = 0;
// let y = [...String(x)];

// for (let i = 0; i < y.length; i++) {
//   sum += Number(y[i]);
// }
// console.log(sum);

let num = 102;
let sum = 0;
while (num > 0) {
  sum += num % 10;
  num = Math.floor(num / 10);
}
console.log(sum);
