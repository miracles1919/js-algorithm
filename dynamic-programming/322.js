/**
 * 零钱兑换
 *
 * 给定不同面额的硬币 coins 和一个总金额 amount。
 * 编写一个函数来计算可以凑成总金额所需的最少的硬币个数。
 * 如果没有任何一种硬币组合能组成总金额，返回 -1。
 *
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

//自顶向下
var coinChange = function (coins, amount) {
  var cache = [];

  // dp(n) 表示总金额为n时 最少硬币个数
  var dp = function (n) {
    if (cache[n]) return cache[n];

    if (n === 0) return 0;
    if (n < 0) return -1;

    let res = Infinity;
    for (let coin of coins) {
      let sub = dp(n - coin);
      // console.log(`n(${n - coin})=${sub}`)

      if (sub === -1) continue; //子问题无解

      res = Math.min(res, 1 + sub);
    }

    cache[n] = res !== Infinity ? res : -1;
    return cache[n];
  };

  return dp(amount);
};

// 自底向上
var coinChange = function (coins, amount) {
  let dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      if (i < coin) continue;

      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
};

var coinChange = function (coins, amount) {
  coins.sort((a, b) => b -a);
  let res = Infinity;

  var dp = function (n, index, count) {
    if (n === 0) {
      res = Math.min(res, count);
      return
    }

    if (index === coins.length) return;

    for (let i = (n / coins[index]) | 0; count + i < res && i >= 0; i--) {
      dp(n - i * coins[index], index + 1, count + i);
    }
  };

  dp(amount, 0, 0);

  return res === Infinity ? -1 : res;
};

console.log(coinChange([1, 2, 5], 11));
