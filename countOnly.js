//FUNCTION: RETURN OBJECT CONTAINING COUNTS OF INPUT
const countOnly = (allItems, itemsToCount) => {
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      results[item] = results[item] + 1 || 1;
    }
  }
  return results;
};

module.exports = countOnly;

//TESTS
// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false, "Salima": true});
// console.log(result1);
// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);
// assertEqual(result1["Salima"], 2);
// assertEqual(result1["Monkey"], undefined);
