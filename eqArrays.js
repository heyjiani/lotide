//FUNCTION FOR COMPARING ARRAYS FOR PERFECT MATCH
const eqArrays = (arrayA, arrayB) => {
  let result = true;
  if (arrayA.length !== arrayB.length) return false;

  for (let i = 0; i < arrayA.length; i++) {
    if (!Array.isArray(arrayA[i])) {
      if (arrayA[i] !== arrayB[i]) return false;
    }

    if (Array.isArray(arrayA[i])) result = eqArrays(arrayA[i], arrayB[i]);
  }
  return result;
};

module.exports = eqArrays;