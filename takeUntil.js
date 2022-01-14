//HELPER FUNCTIONS
const eqArrays = (arrayA, arrayB) => {
  if (arrayA.length !== arrayB.length) return false;
  
  for (let i = 0; i < arrayA.length; i++) {
    if (arrayA[i] !== arrayB[i]) return false;
  }
  return true;
};

const assertArraysEqual = (arrayA, arrayB) => {
  eqArrays(arrayA, arrayB)
  ? console.log(`✅✅✅ Assertion Passed: [${arrayA}] === [${arrayB}]`)
  : console.log(`🛑🛑🛑 Assertion Failed: [${arrayA}] !== [${arrayB}]`);
};

//FUNCTION TO RETURN A SLICE OF THE ARRAY WITH ELEMENTS TAKEN FROM THE BEGINNING
const takeUntil = function(array, callback) {
  for (const item of array) {
    if (callback(item)) return array.slice(0, array.indexOf(item));
  }
};

//TEST CASES
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood']);