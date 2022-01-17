const eqObjects = require('./eqObjects');

//ACTUAL FUNCTION: TAKE TWO OBJECTS AND LOG APPROPRIATE MESSAGE
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`);
  }
};

module.exports = assertObjectsEqual;
// //TEST CASES
// const basket = {banana: "yellow", apple: ["red", "green"], pear: false};
// const fridge = {apple: ["red", "green"], pear: false, banana: "yellow"};
// assertObjectsEqual(basket, fridge);

// const ab = {a: '1', b: 2};
// const ba = {b: 2, a: '1'};
// assertObjectsEqual(ab, ba);