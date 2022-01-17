const head = require('../head');
const assert = require('chai').assert;

describe ('#head', () => {

  it ('returns 1 for [1, 2, 3]', () => {
    const input = [1, 2, 3];
    const actual = head(input);
    const expected = 1;
    assert.strictEqual(actual, expected);
  });

  it ("returns '5' for ['5']", () => {
    const input = ['5'];
    const actual = head(input);
    const expected = '5';
    assert.strictEqual(actual, expected);
  });
  
});