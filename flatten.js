//function for flattening arrays into single-level array
const flatten = (array) => {
  let flatArray = [];
  for (let value of array) {
    Array.isArray(value) ? flatArray = flatArray.concat(flatten(value)) : flatArray.push(value);
  }
  return flatArray;
};

//imported functions
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

//test
console.log(assertArraysEqual(['dog', 'cat', 'ferret', 'mouse'], flatten(['dog', 'cat', ['ferret', 'mouse']])));
console.log(assertArraysEqual([1, 2, 3, 4, 5, 6], flatten([1, [[2, 3], 4], 5, [6]])));