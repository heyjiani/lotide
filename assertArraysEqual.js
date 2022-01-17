//HELPER FUNCTION
const eqArrays = require('./eqArrays');

//ACTUAL FUNCTION
const assertArraysEqual = (arrayA, arrayB) => {
  eqArrays(arrayA, arrayB)
  ? console.log(`✅✅✅ Assertion Passed: [${arrayA}] === [${arrayB}]`)
  : console.log(`🛑🛑🛑 Assertion Failed: [${arrayA}] !== [${arrayB}]`);
};

module.exports = assertArraysEqual;
//TEST CASES
// assertArraysEqual([1, 2, 3],[1, 2, 3]); //TRUE
// assertArraysEqual([1, 3, 2],[1, 2, 3]); //FALSE
// assertArraysEqual([1, 2, 3],[1, 2]); //FALSE

