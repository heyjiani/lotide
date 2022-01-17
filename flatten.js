//function for flattening arrays into single-level array
const flatten = (array) => {
  let flatArray = [];
  for (let value of array) {
    Array.isArray(value) ? flatArray = flatArray.concat(flatten(value)) : flatArray.push(value);
  }
  return flatArray;
};

module.exports = flatten;

//test
// console.log(assertArraysEqual(['dog', 'cat', 'ferret', 'mouse'], flatten(['dog', 'cat', ['ferret', 'mouse']])));
// console.log(assertArraysEqual([1, 2, 3, 4, 5, 6], flatten([1, [[2, 3], 4], 5, [6]])));