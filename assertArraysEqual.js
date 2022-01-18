//HELPER FUNCTION
const eqArrays = require('./eqArrays');

//ACTUAL FUNCTION
const assertArraysEqual = (arrayA, arrayB) => {
  eqArrays(arrayA, arrayB)
    ? console.log(`✅✅✅ Assertion Passed: [${arrayA}] === [${arrayB}]`)
    : console.log(`🛑🛑🛑 Assertion Failed: [${arrayA}] !== [${arrayB}]`);
};

module.exports = assertArraysEqual;


