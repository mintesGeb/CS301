//1. 0, 2,4,0,4,8
// -------------------------------------------------
function isSumSafe(arr) {
  if (arr.length === 0) return false;
  let sum = sumOfElements(arr);

  if (arr.includes(sum)) return false;

  return true;
}

console.log(isSumSafe([5, -4, 1]));

function sumOfElements(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
// console.log(sumOfElements([5, -5, 0]));

// --------------------------------------------

let arrOrig = [-1, 3, -4, 5, 6, 9];
let absEach = arrOrig.map((item) => Math.abs(item));
console.log(absEach);
// --------------------------------------------
let arrStr = ["this", "that", "Hi_there", "How_are_you"];
let filtered = arrStr.filter((item) => item[0] === "t");
console.log(filtered);
// --------------------------------------------

function oneToOne(arr) {
  let element2 = arr.slice(1, -1);
  if (arr[0] !== 1 || arr[arr.length - 1] !== 1) return false;

  for (let each of element2) {
    if (each !== 2) return false;
  }
  return true;
}
console.log(oneToOne([1, 2, 2, 1]));
console.log(oneToOne([1, 2, 2, 2, 2, 2]));
console.log(oneToOne([1, 2, 2, 3, 2, 1]));
