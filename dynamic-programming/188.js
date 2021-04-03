/**
 * 买卖股票的最佳时机 III
 * 给定一个数组，它的第 i 个元素是一支给定的股票在第 i 天的价格。
 * 设计一个算法来计算你所能获取的最大利润。你最多可以完成 k笔 交易。
 * 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
 *
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
  const memo = {};
  function dp(start, k) {
    if (start >= prices.length) return 0;
    if (k === 0) return 0;
    if (memo[start + "," + k]) return memo[start + "," + k];
    let res = 0,
      min = prices[start];
    for (let i = start + 1; i < prices.length; i++) {
      min = Math.min(min, prices[i]);
      res = Math.max(res, dp(i + 1, k - 1) + prices[i] - min);
    }
    memo[start + "," + k] = res;
    return res;
  }

  return dp(0, k);
};

var maxProfit = function (k, prices) {
  // dp[i][j][0 or 1] i为天数，j交易数，0-没有持有 1-持有
  const dp = [];
  const n = prices.length;

  // if (k > n / 2) {
  //   此时k相当于无穷 
  //   return 122解法
  // }

  if (n === 0) return 0

  for (let i = 0; i < n; i++) {
    dp[i] = [];
    for (let j = 0; j <= k; j++) {
      dp[i][j] = [];
      if (j === 0) {
        dp[i][j][0] = 0;
        dp[i][j][1] = -Infinity;
      }
    }
  }
  // dp[-1][k][0] = 0
  // dp[-1][k][1] = -Infinity;

  for (let i = 0; i < n; i++) {
    for (let j = 1; j <= k; j++) {
      if (i === 0) {
        dp[i][j][0] = 0;
        dp[i][j][1] = -prices[i];
        continue;
      }

      dp[i][j][0] = Math.max(
        // 没有持有 有两种可能
        dp[i - 1][j][0], // 昨天没有持有
        dp[i - 1][j][1] + prices[i] // 昨天持有 今天卖出
      );

      dp[i][j][1] = Math.max(
        // 持有 有两种可能
        dp[i - 1][j - 1][0] - prices[i], // 昨天没有持有 今天购买
        dp[i - 1][j][1] // 昨天持有
      );
    }
  }

  return dp[n - 1][k][0];
};

console.log(maxProfit(2, [3,3,5,0,0,3,1,4]));
