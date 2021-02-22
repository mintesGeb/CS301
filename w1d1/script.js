console.log("Mintes");

function isPrime(num) {
  let isPrime = true;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) isPrime = false;
  }
  return isPrime;
}

// console.log(isPrime(9));

function printPrimeNumbers(num) {
  let arr = [];
  let i = 2;
  while (arr.length < num) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) isPrime = false;
    }
    if ((isPrime = true)) arr.push(i);
  }
  return arr;
}

console.log(printPrimeNumbers(5));
