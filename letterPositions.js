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

module.exports = letterPositions;
// //TESTS
// assertArraysEqual(letterPositions('hello').l, [2, 3]);
// assertArraysEqual(letterPositions('lighthouse in the house').h, [3, 5, 13, 15]);