const tail = require('../tail');
const assertEqual = require('../assertEqual');


//test cases:
assertEqual(tail([1, 2, 5, 6, 3]).length, 4);