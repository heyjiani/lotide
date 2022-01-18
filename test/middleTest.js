const middle = require('../middle');
const assert = require('chai').assert;

describe(`#middle`, () => {

  it(`returns ['monkey'] for [1, 'monkey', 3]`, () => {
    const input = [1, 'monkey', 3];
    const actual = middle(input);
    const expected = ['monkey'];
    assert.deepEqual(actual, expected);
  });

  it(`returns [2, 3] for [1, 2, 3, 4]`, () => {
    const input = [1, 2, 3, 4];
    const actual = middle(input);
    const expected = [2, 3];
    assert.deepEqual(actual, expected);
  });

  it(`returns [] for [1, 2]`, () => {
    const input = [1, 2];
    const actual = middle(input);
    const expected = [];
    assert.deepEqual(actual, expected);
  });
});