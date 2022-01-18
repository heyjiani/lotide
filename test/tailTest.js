const tail = require('../tail');
const assert = require('chai').assert;

describe('#tail', () => {

  it(`returns [2, 5, 6, 3] for [1, 2, 5, 6, 3]`, () => {
    const input = [1, 2, 5, 6, 3];
    const actual = tail(input);
    const expected = [2, 5, 6, 3];
    assert.deepEqual(actual, expected);
  });
  
  it(`returns ['monkey', 'banana'] for ['hello', 'monkey', 'banana']`, () => {
    const input = ['hello', 'monkey', 'banana'];
    const actual = tail(input);
    const expected = ['monkey', 'banana'];
    assert.deepEqual(actual, expected);
  });

  it(`should not modify the original array that is passed in`, () => {
    const input = [1, 2, 5, 6, 3];
    tail(input);
    const expected = [1, 2, 5, 6, 3];
    assert.deepEqual(input, expected);
  });

});