//HELPER FUNCTION
const eqArrays = (arrayA, arrayB) => {
  if (arrayA.length !== arrayB.length) return false;

  for (let i = 0; i < arrayA.length; i++) {
    if (arrayA[i] !== arrayB[i]) return false;
  }
  return true;
};

//ACTUAL FUNCTION
const assertArraysEqual = (arrayA, arrayB) => {
  eqArrays(arrayA, arrayB)
  ? console.log(`✅✅✅ Assertion Passed: [${arrayA}] === [${arrayB}]`)
  : console.log(`🛑🛑🛑 Assertion Failed: [${arrayA}] !== [${arrayB}]`);
};

//TEST CASES
assertArraysEqual([1, 2, 3],[1, 2, 3]); //TRUE
assertArraysEqual([1, 3, 2],[1, 2, 3]); //FALSE
assertArraysEqual([1, 2, 3],[1, 2]); //FALSE
