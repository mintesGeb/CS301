const assert = require("assert");
const test = require("./functions.js");

describe("checkPrime", function () {
  it("5 is prime", function () {
    assert.strictEqual(test.checkPrimeNumbers(5), true);
  });
  it("6 is not prime", function () {
    assert.strictEqual(test.checkPrimeNumbers(6), false);
  });
});

describe("power", function () {
  it("2 raised to the power of 3 is 8", function () {
    assert.strictEqual(test.power(2, 3), 8);
  });
});

describe("volumeOfHouse", function () {
  it("w=20, d=50, h=10, s=3 must give volume of 10650", function () {
    assert.strictEqual(test.volumeOfHouse(20, 50, 10, 3), 10650);
  });
});

describe("greatestCommonFactor", function () {
  it("4 is the gcf of 20 and 28", function () {
    assert.strictEqual(test.gcf(20, 28), 4);
  });

  it("10 is the gcf of 10 and 20", function () {
    assert.strictEqual(test.gcf(10, 20), 10);
  });
});

describe("leastCommonMultiple", function () {
  it("lcm of 10 and 20 is 20", function () {
    assert.strictEqual(test.lcm(20, 10), 20);
  });

  it("lcm of 3 and 7 is 21", function () {
    assert.strictEqual(test.lcm(3, 7), 21);
  });
});
