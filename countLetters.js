//FUNCTION THAT CREATES AN OBJECT WHICH STORES INDIVIDUAL LETTER COUNTS
const countLetters = str => {
  const result = {};
  const strNoSpace = str.split(' ').join('');

  for (const letter of strNoSpace) {
    result[letter] = result[letter] + 1 || 1;
  }
  return result;
};

module.exports = countLetters;
//TESTS
// const testResult = countLetters('lighthouse in the house');
// assertEqual(testResult.h, 4);
// const anotherTest = countLetters('');
// assertEqual(anotherTest.h, undefined);