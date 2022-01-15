//TESTER FUNCTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//HELPER FUNCTION
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


//ACTUAL FUNCTION: TAKE TWO OBJECTS AND RETURN TRUE/FALSE BASED ON PERFECT MATCH
const eqObjects = function(object1, object2) {

  if (Object.keys(object1).length !== Object.keys(object2).length) return false;

  for (const key in object1) {

    if (typeof object1[key] === 'object') {
      return !Array.isArray(object1[key])
      ? eqObjects(object1[key], object2[key])
      : eqArrays(object1[key], object2[key]);
    } 
    
    if (object1[key] !== object2[key]) return false;

  }
  return true;
};

//TESTS
const arrA = { a: "1", b: "2" };
const arrB = { b: "2", a: "1" };
assertEqual(eqObjects(arrA, arrB), true);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); 

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);

const basket = {banana: "yellow", apple: ["red", "green"], pear: false};
const fridge = {apple: ["red", "green"], pear: false, banana: "yellow"};
assertEqual(eqObjects(basket, fridge), true);


assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);// => true
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false); // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // => false