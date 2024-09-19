export function analyzeArray(numArr) {
  return {
    average: !numArr
      ? null
      : numArr.reduce((acc, curVal) => acc + curVal) / numArr.length,
    min: null,
    max: null,
    length: null,
  };
}
