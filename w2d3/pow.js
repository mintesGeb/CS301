"use strict";
exports.pow = pow;

/**
 *
 * @param {number} n Number to be powered
 * @param {number} p Number that raises the powered
 * @return {number} powered n raised to p result
 */
function pow(n, p) {
  let i = 1;
  let powered = 1;
  while (i <= p) {
    powered *= n;
    i++;
  }
  return powered;
}
console.log(pow(2, 3));
