const prompt = require("prompt-sync")();
const w = +prompt("Enter the width of the house: ");
const d = +prompt("Enter the depth of the house: ");
const h = +prompt("Enter the height of the house: ");
const s = +prompt("Enter the sweep of the house: ");

function volumeOfHouse() {
  function volumeOfBase(width, depth, height) {
    return width * height * depth;
  }

  function volumeOfRoof(width, depth, sweep) {
    return ((2 * sweep + width) / 2) * depth;
  }
  let volumeTotal = volumeOfBase(w, d, h) + volumeOfRoof(w, d, s);
  return volumeTotal;
}

console.log(volumeOfHouse());
