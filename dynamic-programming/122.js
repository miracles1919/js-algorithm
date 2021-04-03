/**
 * 买卖股票的最佳时机 II
 * 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
 * 设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）
 * 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
 *
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let res = 0;
  for (let i = 1; i < prices.length; i++) {
    let price = prices[i] - prices[i - 1];
    if (price > 0) res += price;
  }

  return res;
};

// 使用188模板 此时k = 正无穷
// k为正无穷 可以认为k 和 k-1是一样的
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
    dp[i][1] = Math.max(dp[i - 1][0] - prices[i], dp[i - 1][1]);
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
    dp_i_1 = Math.max(dp_i_1, dp_i_0 - prices[i]);
  }
  return dp_i_0;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
