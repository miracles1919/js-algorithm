/**
 * 三角形最小路径和
 * 给定一个三角形 triangle ，找出自顶向下的最小路径和。
 * 每一步只能移动到下一行中相邻的结点上。相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。
 * 也就是说，如果正位于当前行的下标 i ，那么下一步可以移动到下一行的下标 i 或 i + 1 。
 *
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  const m = triangle.length;

  // dp[i][j]表示 自顶到(i, j)的最小路径和
  const dp = new Array(m);
  dp[0] = [triangle[0][0]];

  for (let i = 1; i < m; i++) {
    let nums = triangle[i];
    let n = nums.length;
    dp[i] = new Array(n).fill(0);
    for (let j = 0; j < n; j++) {
      if (j == 0) {
        dp[i][j] = dp[i - 1][0] + nums[0];
      } else if (j == i) {
        dp[i][j] = dp[i - 1][j - 1] + nums[j];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j - 1]) + nums[j];
      }
    }
  }

  return Math.min(...dp[m - 1]);
};

// 自底向上
var minimumTotal = function (triangle) {
  const m = triangle.length;
  const n = triangle[m - 1].length;

  // dp[i][j]表示 自(i, j)到底的最小路径和
  const dp = new Array(m + 1).fill(0).map((_) => new Array(n + 1).fill(0));

  for (let i = m - 1; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + triangle[i][j];
    }
  }

  return dp[0][0];
};

// 状态压缩
var minimumTotal = function (triangle) {
  const m = triangle.length;

  const dp = new Array(m + 1).fill(0);

  for (let i = m - 1; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j];
    }
  }

  return dp[0];
};

console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));
console.log(minimumTotal([[-1], [-2, -3]]));
