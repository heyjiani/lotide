//FUNCTION WHICH RETURNS FIRST KEY OF OBJECT WHICH MATCHES THE ONE SPECIFIED IN CALLBACK
const findKey = function(object, callback) {

  for (const key in object) {
    if (callback(object[key])) return key;
  }
  return undefined;
}

module.exports = findKey;

// //TEST CASES
// const testResult = findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2)

// assertEqual(testResult, "noma");

// const anotherTest = findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 4)

// assertEqual(anotherTest, undefined);
