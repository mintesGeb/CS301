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

let arr = [1, 2, 3];
let arr2 = ["mintes", "robbie", "amen"];
console.log(arr2.map((item) => item.length));
function addstr(n) {
  return n + "abc";
}
// console.log(arr.map(addstr()));
