const assertEqual = require('./assertEqual');

//FUNCTION FOR RETURNING THE FIRST ITEM IN AN ARRAY
const head = function (arr) {
  return arr ? arr[0] : "undefined";
};

module.exports = head;
// //TESTS
// assertEqual(head([5,6,7]), 5) // true;
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello") //true;
// assertEqual(head([1]), 5) // false;