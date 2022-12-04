/**
 * 螺旋矩阵
 */

function spiralOrder(matrix: number[][]): number[] {
  const m = matrix.length;
  const n = matrix[0].length;
  const res: number[] = [];

  let top = 0,
    bottom = m - 1,
    left = 0,
    right = n - 1;

  const max = m * n;

  while (res.length < max) {
    if (top <= bottom) {
      for (let i = left; i <= right; i++) {
        res.push(matrix[top][i]);
      }
      top++;
    }

    if (left <= right) {
      for (let i = top; i <= bottom; i++) {
        res.push(matrix[i][right]);
      }
      right--;
    }

    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        res.push(matrix[bottom][i]);
      }
      bottom--;
    }
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        res.push(matrix[i][left]);
      }
      left++;
    }
  }

  return res;
}
