/**
 * 螺旋矩阵 II
 * 给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。
 *
 */

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let top = 0,
    bottom = n - 1;
  let left = 0,
    right = n - 1;
  const res = new Array(n).fill(1).map((_) => []);
  let num = 1;
  while (num <= n * n) {
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
};
