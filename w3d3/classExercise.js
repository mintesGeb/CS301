function powerToNegative(num, pow) {
  if (pow === 0) return 1;
  return (1 / num) * powerToNegative(num, pow + 1);
}

console.log(powerToNegative(5, -3));
console.log(1 / Math.pow(5, 3));

function power(x, n) {
  if (n == 1) {
    return x;
  } else if (n >= 0) {
    return x * power(x, n - 1);
  } else {
    return 1 / power(x, -n);
  }
}
console.log(power(5, -3));
