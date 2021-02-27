function areaOfCircle(rad) {
  let area = Math.PI * Math.pow(rad, 2);
  return area;
}

function volumeOfCircle(height) {
  let area = areaOfCircle(1);
  let volume = area * height;
  return volume;
}

console.log(volumeOfCircle(1));
