"use strict";
// let prompt = require("prompt-sync")();
// let x = prompt("name");
// console.log(x);
let y = [1, 2, true, 2];
// console.log(y.lastIndexOf(2, -1));

let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
  { id: 3, name: "Amen" },
];

// let user = users.find((item) => item.id === 1);
// console.log(user.name);

let userFind = users.filter((item) => item.id === 3);
console.log(userFind[0].name, userFind[1].name);

for (let i = 0; i < users.length; i++) {
  if (users[i].id === 3) console.log(users[i].name);
}

let arr = [1, 5, 2, 4, 3];
let arr2 = ["mintes", "robbie", "amen"];
console.log(arr2);
let joined = arr2.join();
console.log(joined);
let splitAgain = joined.split(",");
console.log(splitAgain);
for (let each of splitAgain) {
  console.log(each);
}
console.log();
// console.log(arr2.map((item) => item.split()));
function addstr(n) {
  return n + "abc";
}
// console.log(arr.map(addstr()));
// console.log(arr.sort((a, b) => (a > b ? 1 : -1)));
