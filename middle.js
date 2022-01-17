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