/**
 * 买卖股票的最佳时机 III
 * 给定一个数组，它的第 i 个元素是一支给定的股票在第 i 天的价格。
 * 设计一个算法来计算你所能获取的最大利润。你最多可以完成 两笔 交易。
 * 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
 *
 * @param {number[]} prices
 * @return {number}
 */

// 使用188模板 k = 2
var maxProfit = function (prices) {
  var maxProfitWithK = function (k, prices) {
    // dp[i][j][0 or 1] i为天数，j交易数，0-没有持有 1-持有
    const dp = [];
    const n = prices.length;
    // if (k > n / 2) {}

    if (n === 0) return 0;

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

  return maxProfitWithK(2, prices);
};

// 因为k比较小 可以把k = 1 和k = 2的情况穷举出来
// dp[i][2][0] = max(dp[i - 1][2][0], dp[i - 1][2][1] + prices[i])
// dp[i][2][1] = max(dp[i - 1][2][1], dp[i - 1][1][0] - prices[i])
// dp[i][1][0] = max(dp[i - 1][1][0], dp[i - 1][1][1] + prices[i])
// dp[i][1][1] = max(dp[i - 1][1][1], dp[i - 1][0][0] - prices[i]) -> dp[i - 1][0][0] = 0 -> max(dp[i - 1][1][1], - prices[i])

var maxProfit = function (prices) {
  const n = prices.length;
  let dp_i10 = 0, dp_i11 = -Infinity
  let dp_i20 = 0, dp_i21 = -Infinity

  for (let i = 0; i < n; i++) {
    dp_i20 = Math.max(dp_i20, dp_i21 + prices[i])
    dp_i21 = Math.max(dp_i21, dp_i10 - prices[i])
    dp_i10 = Math.max(dp_i10, dp_i11 + prices[i])
    dp_i11 = Math.max(dp_i11, -prices[i])
  }

  return dp_i20
}