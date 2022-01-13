//TESTER FUNCTIONS
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

//ACTUAL FUNCTION: RETURN INDICES OF EACH CHARACTER IN SENTENCE
const letterPositions = function(sentence) {

  const results = {};
  const strNoSpace = sentence.split(' ').join('');

  for (let i = 0; i < strNoSpace.length; i++) {
    let char = strNoSpace[i];

    !results[char] ? results[char] = [i] : results[char].push(i);
  }
  return results;
};

//TESTS
assertArraysEqual(letterPositions('hello').l, [2, 3]);
assertArraysEqual(letterPositions('lighthouse in the house').h, [3, 5, 13, 15]);