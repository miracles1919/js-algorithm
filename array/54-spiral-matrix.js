/**
 * 螺旋矩阵
 * 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。
 *
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const m = matrix.length,
    n = matrix[0].length;
  let top = 0,
    bottom = m - 1;
  let left = 0,
    right = n - 1;
  const res = [];
  while (res.length < m * n) {
    if (top <= bottom) {
      // 在顶部从左往右遍历
      for (let i = left; i <= right; i++) {
        res.push(matrix[top][i]);
      }
      top++;
    }

    if (left <= right) {
      // 在右侧从上往下遍历
      for (let i = top; i <= bottom; i++) {
        res.push(matrix[i][right]);
      }
      right--;
    }

    if (top <= bottom) {
      // 在底部从右往左遍历
      for (let i = right; i >= left; i--) {
        res.push(matrix[bottom][i]);
      }
      bottom--;
    }

    if (left <= right) {
      // 在左侧从下往上遍历
      for (let i = bottom; i >= top; i--) {
        res.push(matrix[i][left]);
      }
      left++;
    }
  }

  return res;
};
