function diagonalDifference(matrix: number[][]): number[][] {
  const length = matrix.length;
  const result: number[][] = [];

  for (let i = 0; i < length * 2 - 1; i++) {
    const diagonal: number[] = [];
    let row = Math.min(i, length - 1);
    let col = i - row;
    while (row >= 0 && col < length) {
      diagonal.push(matrix[row][col]);
      row--;
      col++;
    }
    result.push(diagonal);
  }
  return result;
}

const matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const output = diagonalDifference(matrix);
console.log(output);
