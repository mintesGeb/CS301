console.log("Mintes");

function isPrime(num) {
  let isPrime = true;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) isPrime = false;
  }
  return isPrime;
}

console.log(isPrime(9));

function fiveFirstPrime() {}
