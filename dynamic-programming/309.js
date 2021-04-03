/**
 * 最佳买卖股票时机含冷冻期
 * 给定一个整数数组，其中第 i 个元素代表了第 i 天的股票价格 。​
 * 设计一个算法计算出最大利润。在满足以下约束条件下，你可以尽可能地完成更多的交易（多次买卖一支股票）:
 *  你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
 *  卖出股票后，你无法在第二天买入股票 (即冷冻期为 1 天)。
 *
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const memo = [];
  function dp(start) {
    if (start >= prices.length) return 0;
    if (memo[start]) return memo[start];
    let res = 0,
      min = prices[start];
    for (let i = start + 1; i < prices.length; i++) {
      min = Math.min(min, prices[i]);
      res = Math.max(res, dp(i + 2) + prices[i] - min);
    }
    memo[start] = res;
    return res;
  }

  return dp(0);
};

// 使用188 模板 k = 无穷，i - 2 表示i - 1 - 冷冻期
// dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
// dp[i][1] = Math.max(dp[i - 1][1], dp[i - 2][0] - prices[i]);

var maxProfit = function (prices) {
  const n = prices.length;
  let dp_i_0 = 0,
    dp_i_1 = -Infinity,
    dp_i_2_0 = 0; // dp[i - 2][0]
  for (let i = 0; i < n; i++) {
    let temp = dp_i_0;
    dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);
    dp_i_1 = Math.max(dp_i_1, dp_i_2_0 - prices[i]);
    dp_i_2_0 = temp;
  }
  return dp_i_0;
};

console.log(maxProfit([1, 2, 3, 0, 2]));
