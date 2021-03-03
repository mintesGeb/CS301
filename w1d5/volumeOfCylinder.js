/**
 * 
 * @param {number} rad radius of a circle 
 * @return {number} area Area of a circle will be returned
 
 */

function areaOfCircle(rad) {
  let area = Math.PI * Math.pow(rad, 2);
  return area;
}

/**
 *
 * @param {number} height height of the cylinder
 * @return {number} volume colume of a cylinder
 */

function volumeOfCylinder(height) {
  let area = areaOfCircle(1);
  let volume = area * height;
  return volume;
}

console.log(volumeOfCylinder(1));
