let x = 102;
let sum = 0;
let y = [...String(x)];

for (let i = 0; i < y.length; i++) {
  sum += Number(y[i]);
}
console.log(sum);
