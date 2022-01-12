//TEST/ASSERTION FUNCTIONS
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

const assertArraysEqual = (arrayA, arrayB) => {
  if (eqArrays(arrayA, arrayB)) {
    console.log(`✅✅✅ Assertion Passed: [${arrayA}] === [${arrayB}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${arrayA}] !== [${arrayB}]`);
  }
};

//ACTUAL FUNCTION : FIND MIDDLE ELEMENTS OF ARRAY
const middle = array => {

  let middleElement = [];

  const length = array.length;
  const midLength = Math.floor(length / 2);

  if (length <= 2) return middleElement;

  if (length % 2 === 0) {
    middleElement.push(array[midLength - 1], array[midLength]);
  } else {
    middleElement.push(array[midLength]);
  }

  return middleElement;
};

//tests
assertArraysEqual(['monkey'], middle([1, 'monkey', 3]));
assertArraysEqual([2, 3], middle([1, 2, 3, 4]));
assertArraysEqual([], middle([1, 2]));
assertArraysEqual([4, 5], middle([1, 2, 3, 4, 5, 6, 7, 8]));

