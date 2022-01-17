const head = require('../head');
const assert = require('chai').assert;

describe ('#head', () => {
  it ('returns 1 for [1, 2, 3]', () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
});


// head([5,6,7]) // true;
// head(["Hello", "Lighthouse", "Labs"]) //true;
// head([1]) // false;nod