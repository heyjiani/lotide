const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = array => {
  let output = [];
  for (let i = 1; i < array.length; i++) {
    output.push(array[i]);
  }
  return output;
};

//test cases:
console.log(tail([]));
console.log(tail([3]));
const arr = [2, 55, "hello"];
console.log(tail(arr));
assertEqual(arr.length, 3);