exports.mostFrequentSight = mostFrequentSight;
exports.computeCharges = computeCharges;
exports.computeHeight = computeHeight;
exports.findMinDistance = findMinDistance;
exports.divisibleSumPairs = divisibleSumPairs;
exports.countSocksPairs = countSocksPairs;

// ?---------- 2 ----  Programming Comp

/**
 *
 * @param {object} arr
 * @returns {number} maxChar
 * Abrham
 */
function mostFrequentSight(arr) {
  let maxChar;
  let max = 0;
  let count;

  for (let i = 0; i < arr.length; i++) {
    count = 0;
    for (let each of arr) {
      if (arr[i] === each) {
        count++;
      }
    }
    if (count > max) {
      max = count;
      maxChar = arr[i];
      // console.log([maxChar, max]);
    }
  }
  return maxChar;
}
console.log(mostFrequentSight([1, 1, 2, 2, 3]));

// ?---------- 5 ----  Programming Comp
// Mintes
/**
 *
 * @param {obj} arr
 * @returns {obj} newObj
 */
function computeCharges(arr) {
  let newArr = [];
  let ave;
  let sumOfCharges = 0;
  let chargesArr;
  let key;
  let maxCharge;
  let newObj;

  for (let each of arr) {
    sumOfCharges = 0;
    newObj = {};
    key = Object.keys(each);
    chargesArr = each[key[1]];
    maxCharge = Math.max(...chargesArr);
    console.log(chargesArr);

    for (let element of chargesArr) {
      sumOfCharges += element;
    }
    console.log(sumOfCharges);

    ave = sumOfCharges / chargesArr.length;
    console.log(chargesArr.length);
    console.log(ave);
    newObj[key[0]] = each[key[0]];
    newObj.average = ave;
    newObj.maximum = maxCharge;
    // console.log(newObj);
    newArr.push(newObj);
  }

  return newArr;
}

const charges = [
  { custId: 1, charges: [5, 7, 3] },
  { custId: 2, charges: [20, 60, 50, 30] },
];
console.log(computeCharges(charges));

// ?----------  ----  Programming Comp

/**
 *
 * @param {int} height
 * @param {int} cycles
 * @returns {int} - how tall the tree will be after n growth cycles given the original height
 */
function computeHeight(height, cycles) {
  let year = cycles / 2;
  for (let i = 0; i < year; i++) {
    height = height * 2;
    height = height + 1;
  }
  return height;
}

/**
 *
 * @param {*} arr -takes an array
 * @returns {int} - min distance b/n matching pairs of elements in the array
 */
function findMinDistance(arr) {
  let min = arr.length;
  let distance;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (i === j) {
        continue;
      } else {
        if (arr[i] === arr[j]) {
          distance = makeAbsolute(j - i);
          if (distance < min) {
            min = distance;
          }
        }
      }
    }
  }
  if (min === arr.length) {
    return -1;
  }
  return min;
}

function makeAbsolute(num) {
  let absolute;
  if (num < 0) {
    absolute = num * -1;
  } else {
    absolute = num;
  }
  return absolute;
}

console.log(findMinDistance([3, 2, 1, 2, 3]));

function divisibleSumPairs(arr, k) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      //console.log(i,j);
      if ((arr[i] + arr[j]) % k === 0) {
        if (i < j) count++;
      }
    }
  }
  return count;
}
console.log(divisibleSumPairs([1, 2, 3, 4, 5, 6], 5));

/**
 *
 * @param {array} array
 * @returns {int} integers representing the color of each sock
 */

function countSocksPairs(ar) {
  let socks = {};
  let pairs = 0;
  for (let element of ar) {
    socks[element] = socks[element] + 1 || 1;
    if (socks[element] % 2 === 0) {
      pairs += 1;
    }
  }
  return pairs;
}
console.log(countSocksPairs([10, 20, 20, 10, 10, 30, 50, 10, 20]));
