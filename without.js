//function to remove a list of items from another array
const without = (source, itemsToRemove) => {
  return source.filter(item => !itemsToRemove.includes(item));
};

module.exports = without;

// const arrA = [1, 2, 3, 3, 4, 'monkey', 'apple'];
// const arrB = [1, 3, 'apple', '4'];
// console.log(without(arrA, arrB));
// console.log(assertArraysEqual(without(arrA, arrB), [2, 4, 'monkey']));