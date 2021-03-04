const prompt = require("prompt-sync")();
// const w = +prompt("Enter the width of the house: ");
// const d = +prompt("Enter the depth of the house: ");
// const h = +prompt("Enter the height of the house: ");
// const s = +prompt("Enter the sweep of the house: ");
/**
 *
 * @param {number} width width of the base of the house
 * @param {number} depth depth of the base of the house
 * @param {number} height height of the base of the house
 * @return {number} volume volume of the base of the house
 */
function volumeOfBase(width, depth, height) {
  const volume = width * height * depth;
  return volume;
}

/**
 *
 * @param {number} width width of the roof of the house
 * @param {number} depth depth of the roof of the house
 * @param {number} sweep sweep of the roof of the house
 * @return {number} volume volume of the roof of the house
 */

function volumeOfRoof(width, depth, sweep) {
  const volume = areaTriangle(sweep, sweep, width) * depth;
  return volume;
}

/**
 *
 * @param {number} side1 one of the three sides of the triangle of the roof
 * @param {number} side2 one of the three sides of the triangle of the roof
 * @param {number} side3 one of the three sides of the triangle of the roof
 */
function areaTriangle(side1, side2, side3) {
  return (side1 + side2 + side3) / 2;
}
/**
 * @return {number} volume total volume of the house
 */
function volumeOfHouse(w, d, h, s) {
  let volumeTotal = volumeOfBase(w, d, h) + volumeOfRoof(w, d, s);
  return volumeTotal;
}

console.log(volumeOfHouse(20, 50, 10, 3));
