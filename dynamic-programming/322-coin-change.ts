/**
 * 零钱兑换
 *
 * 给定不同面额的硬币 coins 和一个总金额 amount。
 * 编写一个函数来计算可以凑成总金额所需的最少的硬币个数。
 * 如果没有任何一种硬币组合能组成总金额，返回 -1。
 */

function coinChange(coins: number[], amount: number): number {
  // dp[i] 表示凑成金额 i 所需的最少的硬币个数
  const dp: number[] = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (i < coin) continue;
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
}

function coinChange2(coins: number[], amount: number): number {
  const cache: Record<number, number> = {};
  // dp(n) 表示凑成金额 n 所需的最少的硬币个数
  function dp(n: number): number {
    if (cache[n]) return cache[n];
    if (n === 0) return 0;
    if (n < 0) return -1;
    let res = Infinity;
    for (const coin of coins) {
      const num = dp(n - coin);
      if (num === -1) continue;
      res = Math.min(res, num + 1);
    }
    cache[n] = res !== Infinity ? res : -1;
    return cache[n];
  }

  return dp(amount);
}

// var coinChange = function (coins, amount) {
//   coins.sort((a, b) => b -a);
//   let res = Infinity;

//   var dp = function (n, index, count) {
//     if (n === 0) {
//       res = Math.min(res, count);
//       return
//     }

//     if (index === coins.length) return;

//     for (let i = (n / coins[index]) | 0; count + i < res && i >= 0; i--) {
//       dp(n - i * coins[index], index + 1, count + i);
//     }
//   };

//   dp(amount, 0, 0);

//   return res === Infinity ? -1 : res;
// };
