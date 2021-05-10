/**
 * 石子游戏
 * 偶数堆石子排成一行，每堆都有正整数颗石子 piles[i]
 * 游戏以谁手中的石子最多来决出胜负。石子的总数是奇数，所以没有平局。
 * 先手赢得比赛时返回 true， 后手赢得比赛时返回false
 *
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function (piles) {
  // 数学法
  return true;
};

// 动态规划
var stoneGame = function (piles) {
  // dp[i][j] 表示piles[i...j]这部分石子堆 当前玩家和另一玩家的 石子数之差 的最大值
  const dp = [];
  const n = piles.length;
  for (let i = 0; i < n; i++) {
    dp[i] = [];
    dp[i][i] = piles[i];
  }

  for (let i = n - 2; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      dp[i][j] = Math.max(
        piles[i] - dp[i + 1][j], // 取走piles[i]
        piles[j] - dp[i][j - 1] // 取走piles[j]
      );
    }
  }

  return dp[0][n - 1] > 0;
};

// 状态压缩
var stoneGame = function (piles) {
  const dp = [];
  const n = piles.length;
  for (let i = 0; i < n; i++) {
    dp[i] = piles[i];
  }

  for (let i = n - 2; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      dp[j] = Math.max(piles[i] - dp[j], piles[j] - dp[j - 1]);
    }
  }

  return dp[n - 1] > 0;
};
