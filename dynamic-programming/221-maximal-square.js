/**
 * 最大正方形
 * 在一个由 '0' 和 '1' 组成的二维矩阵内，找到只包含 '1' 的最大正方形，并返回其面积。
 *
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  const m = matrix.length,
    n = matrix[0].length;

  // dp[i][j] 表示以(i,j)为右下角的最长边长
  const dp = new Array(m).fill(0).map((_) => new Array(n).fill(0));

  let maxLen = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] == '1') {
        // 边界
        if (i == 0 || j == 0) {
          dp[i][j] = 1;
        } else {
          dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
        }

        maxLen = Math.max(maxLen, dp[i][j]);
      }
    }
  }

  return maxLen * maxLen;
};

// 状态压缩
var maximalSquare = function (matrix) {
  const m = matrix.length,
    n = matrix[0].length;
  const dp = new Array(Math.max(m, n) + 2).fill(0);

  let maxLen = 0;

  for (let i = 1; i <= m; i++) {
    // 存储dp[i - 1][j - 1]
    let prev = 0;

    for (let j = 1; j <= n; j++) {
      let temp = dp[j];
      if (matrix[i - 1][j - 1] == '1') {
        dp[j] = Math.min(dp[j], dp[j - 1], prev) + 1;
      } else {
        dp[j] = 0
      }

      maxLen = Math.max(maxLen, dp[j]);
      if (isNaN(maxLen)) {
        console.log(i, j)
      }
      prev = temp;
    }
  }

  return maxLen * maxLen;
};

// console.log(
//   maximalSquare([
//     ['1', '0', '1', '0', '0'],
//     ['1', '0', '1', '1', '1'],
//     ['1', '1', '1', '1', '1'],
//     ['1', '0', '0', '1', '0'],
//   ])
// );

console.log(
  maximalSquare(
    [["1","1","1","1","1","1","1","1"],["1","1","1","1","1","1","1","0"],["1","1","1","1","1","1","1","0"],["1","1","1","1","1","0","0","0"],["0","1","1","1","1","0","0","0"]]
  )
);
