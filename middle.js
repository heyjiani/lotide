//TEST/ASSERTION FUNCTIONS
const assertArraysEqual = require('./assertArraysEqual');

//ACTUAL FUNCTION : FIND MIDDLE ELEMENTS OF ARRAY
const middle = array => {
  const length = array.length;
  const mid = Math.floor(length / 2);
  
  if (length <= 2) return [];

  return length % 2 === 0 ? array.slice(mid - 1, mid + 1) : [array[mid]];
};

module.exports = middle;
//tests
assertArraysEqual(['monkey'], middle([1, 'monkey', 3]));
assertArraysEqual([2, 3], middle([1, 2, 3, 4]));
assertArraysEqual([], middle([1, 2]));
assertArraysEqual([4, 5], middle([1, 2, 3, 4, 5, 6, 7, 8]));

