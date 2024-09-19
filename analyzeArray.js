export function analyzeArray(numArr) {
  return {
    average: !numArr
      ? null
      : numArr.reduce((acc, curVal) => acc + curVal) / numArr.length,
    min: !numArr ? null : numArr.sort()[0],
    max: !numArr ? null : numArr.sort((a, b) => b - a)[0],
    length: !numArr ? null : numArr.length,
  };
}
