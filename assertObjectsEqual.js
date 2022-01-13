//HELPER FUNCTIONS
const eqArrays = (arrayA, arrayB) => {
  if (arrayA.length !== arrayB.length) {
    return false;
  }
  for (let i = 0; i < arrayA.length; i++) {
    if (arrayA[i] !== arrayB[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(object1, object2) {

  if (Object.keys(object1).length !== Object.keys(object2).length) return false;

  for (const key in object1) {
    if (Array.isArray(object1[key])) {
      return eqArrays(object1[key], object2[key])
    } else if (object1[key] !== object2[key]) return false;
  }
  return true;
};

//ACTUAL FUNCTION: TAKE TWO OBJECTS AND LOG APPROPRIATE MESSAGE
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`);
  }
};

//TEST CASES
const basket = {banana: "yellow", apple: ["red", "green"], pear: false};
const fridge = {apple: ["red", "green"], pear: false, banana: "yellow"};
assertObjectsEqual(basket, fridge);

const ab = {a: '1', b: 2};
const ba = {b: 2, a: '1'};
assertObjectsEqual(ab, ba);