/**
 * 最长回文子序列
 * 给定一个字符串 s ，找到其中最长的回文子序列，并返回该序列的长度。可以假设 s 的最大长度为 1000
 *
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
  let n = s.length;
  let dp = [];

  for (let i = 0; i < n; i++) {
    dp[i] = [];
    for (let j = 0; j < n; j++) {
      dp[i][j] = 0;
      if (j == i) dp[i][j] = 1;
    }
  }

  for (let i = n - 1; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      if (s[i] === s[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2;
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i + 1][j]);
      }
    }
  }

  return dp[0][n - 1];
};

var longestPalindromeSubseq = function (s) {
  let n = s.length;
  let dp = new Array(n).fill(1);

  for (let i = n - 1; i >= 0; i--) {
    let prev = 1; // 存储
    for (let j = i + 1; j < n; j++) {
      let temp = dp[j];
      if (s[i] === s[j]) {
        dp[j] = prev + 2;
      } else {
        dp[j] = Math.max(dp[j - 1], dp[j]);
      }

      prev = temp;
    }
  }

  return dp[n - 1];
};

console.log(longestPalindromeSubseq("bbbab"));
