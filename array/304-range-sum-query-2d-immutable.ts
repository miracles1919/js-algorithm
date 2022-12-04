/**
 * 二维区域和检索 - 矩阵不可变
 */

class NumMatrix {
  // [0, 0, i-1, j-1]
  preSums: number[][];
  constructor(matrix: number[][]) {
    const m = matrix.length;
    const n = matrix[0].length;
    const preSums = new Array(m + 1)
      .fill(0)
      .map(() => new Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        preSums[i][j] =
          matrix[i - 1][j - 1] +
          preSums[i - 1][j] +
          preSums[i][j - 1] -
          preSums[i - 1][j - 1];
      }
    }

    this.preSums = preSums;
  }

  sumRegion(row1: number, col1: number, row2: number, col2: number): number {
    return (
      this.preSums[row2 + 1][col2 + 1] -
      this.preSums[row1][col2 + 1] -
      this.preSums[row2 + 1][col1] +
      this.preSums[row1][col1]
    );
  }
}
