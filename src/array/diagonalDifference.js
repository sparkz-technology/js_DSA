const diagonalDifference = (arr) => {
  if (!Array.isArray(arr)) {
    return "Invalid input";
  }
  let primaryDiagonalSum = 0;
  let secondaryDiagonalSum = 0;
  const n = arr.length;
  arr.forEach((row, i) => {
    primaryDiagonalSum += row[i];
    secondaryDiagonalSum += row[n - 1 - i];
  });
  return Math.abs(primaryDiagonalSum - secondaryDiagonalSum);
};
