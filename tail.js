const assertEqual = require('./assertEqual');

//FUNCTION FOR RETURNING TAIL ELEMENTS IN AN ARRAY
const tail = function (array) {
  return array.slice(1, array.length);
};

module.exports = tail;
