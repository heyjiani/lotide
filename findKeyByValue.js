//ACTUAL FUNCTION: RETURN KEY WHICH CONTAINS A CERTAIN VALUE
const findKeyByValue = (obj, value) => {
  for (const key in obj) {
    if (obj[key] === value) return key;
  }
};

module.exports = findKeyByValue;

// //TESTS
// const bestTVShowsByGenre = { 
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire",
//   lemur: "Zoboomafoo"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
// assertEqual(findKeyByValue(bestTVShowsByGenre, "Zoboomafoo"), "lemur");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "Game of Thrones"), undefined);

