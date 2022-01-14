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

const assertArraysEqual = (arrayA, arrayB) => {
  eqArrays(arrayA, arrayB)
  ? console.log(`✅✅✅ Assertion Passed: [${arrayA}] === [${arrayB}]`)
  : console.log(`🛑🛑🛑 Assertion Failed: [${arrayA}] !== [${arrayB}]`);
};


//FUNCTION: PERFORM A FUNCTION/TRANSFORMATION ON ARRAY
const map = function(array, callback) {
  const results = [];
  for(let item of array) {
    results.push(callback(item));
  }
  return results;
}

//TEST CASES
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);

