/**
 *
 * 戳气球
 * 有 n 个气球，编号为0 到 n - 1，每个气球上都标有一个数字，这些数字存在数组 nums 中。
 *
 * 现在要求你戳破所有的气球。戳破第 i 个气球，你可以获得 nums[i - 1] * nums[i] * nums[i + 1] 枚硬币。
 * 这里的 i - 1 和 i + 1 代表和 i 相邻的两个气球的序号。如果 i - 1或 i + 1 超出了数组的边界，那么就当它是一个数字为 1 的气球。
 * 求所能获得硬币的最大数量。
 *
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
  // 将索引变成 1 ~ n， 增加边界 0 n+1
  let list = [1, ...nums, 1];
  let n = nums.length;

  // dp[i][j]表示气球i和j之间的能获得硬币的最大数量 （不包含 i j）
  let dp = [];
  for (let i = 0; i <= n; i++) {
    dp[i] = [];
    for (let j = 0; j <= n + 1; j++) {
      dp[i][j] = 0;
    }
  }

  for (let i = n; i >= 0; i--) {
    for (let j = i + 1; j <= n + 1; j++) {
      for (let k = i + 1; k < j; k++) {
        // k 表示最后一个被戳破的气球

        dp[i][j] = Math.max(
          dp[i][j],
          dp[i][k] + dp[k][j] + list[i] * list[k] * list[j]
        );
      }
    }
  }

  return dp[0][n + 1];
};

console.log(maxCoins([3,1,5,8]))
// console.log(maxCoins([1, 5]))