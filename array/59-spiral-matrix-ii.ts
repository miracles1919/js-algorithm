/**
 * 螺旋矩阵 II
 */

function generateMatrix(n: number): number[][] {
  const res: number[][] = new Array(n).fill(0).map(() => []);
  let top = 0,
    left = 0,
    bottom = n - 1,
    right = n - 1;
  const max = n * n;

  let num = 1;
  while (num <= max) {
    if (top <= bottom) {
      for (let i = left; i <= right; i++) {
        res[top][i] = num++;
      }
      top++;
    }

    if (left <= right) {
      for (let i = top; i <= bottom; i++) {
        res[i][right] = num++;
      }
      right--;
    }

    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        res[bottom][i] = num++;
      }
      bottom--;
    }

    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        res[i][left] = num++;
      }
      left++;
    }
  }

  return res;
}
