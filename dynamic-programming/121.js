/**
 * 买卖股票的最佳时机
 * 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
 *
 * 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。
 *
 * 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。
 *
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let res = 0,
    min = prices[0];
  for (let i = 1; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    res = Math.max(res, prices[i] - min);
  }
  return res;
};

// 使用188模板 此时k = 1
var maxProfit = function (prices) {
  // dp[i][j][0 or 1] i为天数，j交易数，0-没有持有 1-持有
  const dp = [];
  const n = prices.length;

  if (n === 0) return 0;

  for (let i = 0; i < n; i++) {
    dp[i] = [];
    dp[i][0] = 0;
    dp[i][1] = -Infinity;
  }

  for (let i = 0; i < n; i++) {
    if (i === 0) {
      dp[i][0] = 0;
      dp[i][1] = -prices[i];
      continue;
    }

    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);

    dp[i][1] = Math.max(
      -prices[i], // dp[i - 1][j - 1][0] - prices[i]  j = 1 => dp[i - 1][0][0] = 0
      dp[i - 1][1]
    );
  }

  return dp[n - 1][0];
};

// 进一步优化
// 新状态只和相邻的一个状态有关
var maxProfit = function (prices) {
  const n = prices.length;
  let dp_i_0 = 0,
    dp_i_1 = -Infinity;
  for (let i = 0; i < n; i++) {
    dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);
    dp_i_1 = Math.max(dp_i_1, -prices[i]);
  }
  return dp_i_0;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
