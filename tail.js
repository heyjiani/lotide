const assertEqual = require('./assertEqual');

//FUNCTION FOR RETURNING TAIL ELEMENTS IN AN ARRAY
const tail = function (array) {
  return array.slice(1, array.length);
};

module.exports = tail;

//test cases:
// console.log(tail([]));
// console.log(tail([3]));
// const arr = [2, 55, "hello"];
// console.log(tail(arr));
// assertEqual(arr.length, 3);