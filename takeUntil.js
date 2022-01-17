//FUNCTION TO RETURN A SLICE OF THE ARRAY WITH ELEMENTS TAKEN FROM THE BEGINNING
const takeUntil = function(array, callback) {
  for (const item of array) {
    if (callback(item)) return array.slice(0, array.indexOf(item));
  }
};

module.exports = takeUntil;

// //TEST CASES
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// assertArraysEqual(results1, [1, 2, 5, 7, 2]);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood']);