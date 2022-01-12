const eqArrays = (arrayA, arrayB) => {
  if (arrayA.length !== arrayB.length) {
    return false;
  }
  for (let i = 0; i < arrayA.length; i++) {
    if (arrayA[i] !== arrayB[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = (arrayA, arrayB) => {
  if (eqArrays(arrayA, arrayB)) {
    console.log(`✅✅✅ Assertion Passed: [${arrayA}] === [${arrayB}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${arrayA}] !== [${arrayB}]`);
  }
};

const without = (source, itemsToRemove) => {
  return source.filter(
    sourceItem => {
      return !itemsToRemove.includes(sourceItem);
    }
  );
};

const arrA = [1, 2, 3, 3, 4, 'monkey', 'apple'];
const arrB = [1, 3, 'apple', '4'];
console.log(without(arrA, arrB));
console.log(assertArraysEqual(without(arrA, arrB), arrA));
console.log(assertArraysEqual(without(arrA, arrB), [2, 4, 'monkey']));