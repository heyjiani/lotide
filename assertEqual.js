//FUNCTION FOR COMPARING VALUES FOR EXACT MATCH
const assertEqual = function(actual, expected) {
  actual === expected
  ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

//TEST CASES
assertEqual("Lighthouse Labs", "Bootcamp"); //FAIL
assertEqual(1, 1); //PASS