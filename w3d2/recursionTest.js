"use strict";
const assert = require("assert");
const rec = require("./recursion.js");

/*
Write recursive functions to 
count the digits of a given number
reverse a given string. 
calculate the power of any base
Write your own recursive logic. Do not use existing methods like reverse or length property.
*/

describe("count the digits of a given numb", function () {
  it("counts digits of 1234", function () {
    assert.strictEqual(rec.countDigits(1234), 4);
  });
});

describe("reverse a given string", function () {
  it("reverse apple", function () {
    assert.strictEqual(rec.reverse("apple"), "elppa");
  });
});

describe("calculate the power of any base", function () {
  it("calculate 10**4", function () {
    assert.strictEqual(rec.power(10, 4), 10000);
  });
});
