export function analyzeArray(numArr) {
  return {
    average: !numArr
      ? null
      : numArr.reduce((acc, curVal) => acc + curVal) / numArr.length,
    min: !numArr ? null : numArr.sort()[0],
    max: null,
    length: null,
  };
}
