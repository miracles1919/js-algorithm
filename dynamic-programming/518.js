/**
 * 零钱兑换 II
 * 给定不同面额的硬币和一个总金额。写出函数来计算可以凑成总金额的硬币组合数。假设每一种面额的硬币有无限个。
 *
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */

// 完全背包问题
var change = function (amount, coins) {
  let n = coins.length;

  // dp[i][j] 对于1...i个元素，背包容量为j时的方法数
  let dp = [];
  for (let i = 0; i <= n; i++) {
    dp[i] = [];
    dp[i][0] = 1;
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= amount; j++) {

      if (j - coins[i - 1] >= 0) {
        dp[i][j] = (dp[i - 1][j] || 0) + (dp[i][j - coins[i - 1]] || 0);
      } else {
        dp[i][j] = (dp[i - 1][j] || 0);
      }
    }
  }

  return dp[n][amount] || 0;
};

// 压缩状态
var change = function (amount, coins) {
  let n = coins.length;

  let dp = [1];

  for (let i = 0; i < n; i++) {
    for (let j = 1; j <= amount; j++) {

      if (j - coins[i] >= 0) {
        dp[j] = (dp[j] || 0) + (dp[j - coins[i]] || 0);
      }
    }
  }

  return dp[amount] || 0;
};

console.log(change(5, [1, 2, 5]));
