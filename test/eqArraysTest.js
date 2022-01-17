const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

//TEST CASES
console.log(assertEqual(eqArrays([2,1,3],[1,2,3]), false));
console.log(assertEqual(eqArrays([1,2,3],[1,2,3]), true));
console.log(assertEqual(eqArrays([2,1],[1,2,3]), false));

console.log(assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true));
console.log(assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false));
console.log(assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false));