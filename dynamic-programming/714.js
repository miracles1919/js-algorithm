/**
 * 买卖股票的最佳时机含手续费
 * 给定一个整数数组 prices，其中第 i 个元素代表了第 i 天的股票价格 ；非负整数 fee 代表了交易股票的手续费用。
 * 你可以无限次地完成交易，但是你每笔交易都需要付手续费。如果你已经购买了一个股票，在卖出它之前你就不能再继续购买股票了。
 * 返回获得利润的最大值。
 * 注意：这里的一笔交易指买入持有并卖出股票的整个过程，每笔交易你只需要为支付一次手续费。
 * 
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
 var maxProfit = function(prices, fee) {
  const memo = []
  function dp(start) {
      if (start >= prices.length) return 0
      if (memo[start]) return memo[start]
      let res = 0, min = prices[start]
      for (let i = start + 1; i < prices.length; i++) {
        min = Math.min(min, prices[i])
        res = Math.max(
          res, 
          dp(i + 1) + prices[i] - min - fee 
        )
      }
      memo[start] = res
      return res
  }

  return dp(0, fee)
};

// 使用188 模板 k = 无穷
var maxProfit = function (prices, fee) {
  const n = prices.length;
  let dp_i_0 = 0,
    dp_i_1 = -Infinity;
  for (let i = 0; i < n; i++) {
    dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);
    dp_i_1 = Math.max(dp_i_1, dp_i_0 - prices[i] - fee);
  }
  return dp_i_0;
};