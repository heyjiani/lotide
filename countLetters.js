//TESTER FUNCTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//ACTUAL FUNCTION
const countLetters = str => {

  const result = {};
  const strNoSpace = str.split(' ').join('');

  for (letter of strNoSpace) {
    !result[letter] ? result[letter] = 1 : result[letter] += 1;
  }
  return result;
};

//TESTS
const testResult = countLetters('lighthouse in the house');
assertEqual(testResult.h, 4);
const anotherTest = countLetters('');
assertEqual(anotherTest.h, undefined);