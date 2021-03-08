"use strict";

function makeUser(name, age) {
  return {
    name,
    age,
  };
}

let sam1 = makeUser("sam", 10);
let sam2 = makeUser("sam", 10);
let john = makeUser("john", 10);

function isPersonEqual(obj1, obj2) {
  if (obj1.name === obj2.name && obj1.age === obj2.age) {
    return true;
  }
  return false;
}
console.log(isPersonEqual(sam1, sam2));
console.log(isPersonEqual(sam1, john));

// premitive values are copied "as whole value"
// objects are stored and copied by reference
