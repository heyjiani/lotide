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

assertArraysEqual([1, 2, 3],[1, 2, 3]);
assertArraysEqual([1, 3, 2],[1, 2, 3]);
assertArraysEqual([1, 2, 3],[1, 2]);
