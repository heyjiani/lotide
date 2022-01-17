//HELPER FUNCTION
const assertEqual = function(actual, expected) {
  actual === expected
  ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

//FUNCTION FOR COMPARING ARRAYS FOR PERFECT MATCH
const eqArrays = (arrayA, arrayB) => {
  let result = true;
  if (arrayA.length !== arrayB.length) return false;

  for (let i = 0; i < arrayA.length; i++) {
    if (!Array.isArray(arrayA[i])) {
      if (arrayA[i] !== arrayB[i]) return false;
    }

    if (Array.isArray(arrayA[i])) result = eqArrays(arrayA[i], arrayB[i]);
  }
  return result;
};

//TEST CASES
console.log(assertEqual(eqArrays([2,1,3],[1,2,3]), false));
console.log(assertEqual(eqArrays([1,2,3],[1,2,3]), true));
console.log(assertEqual(eqArrays([2,1],[1,2,3]), false));

console.log(assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true));
console.log(assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false));
console.log(assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false));