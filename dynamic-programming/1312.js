/**
 * 让字符串成为回文串的最少插入次数
 * 给你一个字符串 s ，每一次操作你都可以在字符串的任意位置插入任意字符。
 * 请你返回让 s 成为回文串的 最少操作次数 。
 *
 * @param {string} s
 * @return {number}
 */
var minInsertions = function (s) {
  // dp[i][j] 表示s[i..j]成为回文的最少插入次数
  const dp = [];
  const n = s.length;

  for (let i = 0; i < n; i++) {
    dp[i] = [];
    dp[i][i] = 0;
  }

  for (let i = n - 2; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      if (s[i] === s[j]) {
        dp[i][j] = dp[i + 1][j - 1] || 0;
      } else {
        dp[i][j] = Math.min(dp[i][j - 1] || 0, dp[i + 1][j] || 0) + 1;
      }
    }
  }
  return dp[0][n - 1];
};

// 状态压缩
var minInsertions = function (s) {
  const dp = [];
  const n = s.length;

  for (let i = 0; i < n; i++) {
    dp[i] = 0;
  }

  for (let i = n - 2; i >= 0; i--) {
    // 记录dp[i+1][j-1]
    let pre = 0
    for (let j = i + 1; j < n; j++) {
      let temp = dp[j]
      if (s[i] === s[j]) {
        dp[j] = pre;
      } else {
        dp[j] = Math.min(dp[j - 1], dp[j]) + 1;
      }
      pre = temp
    }
  }
  return dp[n - 1];
};

console.log(minInsertions("leetcode"))