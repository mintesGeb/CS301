"use strict";
const assert = require("assert");
const str = require("./strings.js");

/*
2.	Write a function, isPersonEqual(obj1, obj2) that checks equality for person objects
It can assume that the only properties it needs to check are name and age
*/
describe("isPersonEqual", function () {
  const sam1 = { name: "Sam", age: 10 };
  const sam2 = { name: "Sam", age: 10 };
  const john = { name: "John", age: 10 };

  it("sam1 sam2", function () {
    assert.deepStrictEqual(str.isPersonEqual(sam1, sam2), true);
  });
  it("sam1 john", function () {
    assert.deepStrictEqual(str.isPersonEqual(sam1, john), false);
  });
});

/*
3.	Write the function countProperties(obj) which returns number of properties of an object.
*/
describe("countProperties", function () {
  it("2 properties", function () {
    const bob = { name: "Bob", age: 10 };
    assert.strictEqual(str.countProperties(bob), 2);
  });
});

/*
4.	Write a function checkSpam(str) that returns true if str contains text "lottery" or "prize", otherwise return false. 
*/
describe("checkSpam", function () {
  it("contains prize and lottery", function () {
    const string1 = "there is a prize in the lottery";
    assert.strictEqual(str.checkSpam(string1), true);
  });
  it("does not contain prize or lottery", function () {
    const string2 = "there is a nothing in the fridge";
    assert.strictEqual(str.checkSpam(string2), false);
  });
});

/*
5.	Write a function named suffix that returns the common suffix of two strings. For example, the common suffix of “swimming” 
and “walking” is “ing”. This function takes two parameters and returns the common suffix.
*/
describe("suffix", function () {
  const jackson = "Jackson";
  const johnson = "Johnson";
  const wholesome = "wholesome";

  it("checks for true case", function () {
    assert.strictEqual(str.suffix(jackson, johnson), "son");
  });
  it("checks for false case", function () {
    assert.strictEqual(str.suffix(jackson, wholesome), "");
  });
});

// 6.	Write a function named titleCase with one parameter named s. This function
// returns a copy of s but with the first letter of each word capitalized.
describe("titleCase", function () {
  const jackson = "jackson";

  it("checks for J", function () {
    assert.strictEqual(str.titleCase("jackson"), "Jackson");
  });
});

/*
7.	Write the function getAverageAge(users) that gets an array of objects with two properties name and age and returns the average age.
Use for .. of
*/
describe("average age", function () {
  const people = [
    { name: "Sam", age: 20 },
    { name: "Fred", age: 10 },
  ];

  it("checks for J", function () {
    assert.strictEqual(str.getAverageAge(people), 15);
  });
});

/* 8.	Write a function, sumFirst, to return the sum of the first elements of the inner arrays for arrays with the following structure. 
Use a for .. of loop.  
arr = [[1, 2], [3, 4], [5, 6]]  
*/
describe("first elements", function () {
  const arr = [
    [1, 2],
    [3, 4],
    [5, 6],
  ];

  it("sum is 9", function () {
    assert.strictEqual(str.sumFirst(arr), 9);
  });
});
