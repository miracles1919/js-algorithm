/**
 *
 * 最长公共子序列
 *
 * 给定两个字符串 text1 和 text2，返回这两个字符串的最长公共子序列的长度。
 * 一个字符串的 子序列 是指这样一个新的字符串：它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。
 * 例如，"ace" 是 "abcde" 的子序列，但 "aec" 不是 "abcde" 的子序列。两个字符串的「公共子序列」是这两个字符串所共同拥有的子序列。
 * 若这两个字符串没有公共子序列，则返回 0。
 *
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  let memo = [];

  for (let i = 0; i < text1.length; i++) {
    memo[i] = [];
    for (let j = 0; j < text2.length; j++) {
      memo[i][j] = -1;
    }
  }

  // 计算s[i...]和s2[j...]的最长公共子序列长度
  var dp = function (s1, i, s2, j) {
    // base case
    if (i === s1.length || j === s2.length) return 0;

    if (memo[i][j] !== -1) return memo[i][j];

    if (s1.charAt(i) === s2.charAt(j)) {
      memo[i][j] = dp(s1, i + 1, s2, j + 1) + 1;
    } else {
      memo[i][j] = Math.max(
        dp(s1, i + 1, s2, j), //s1[i] 不在lcs中
        dp(s1, i, s2, j + 1) //s2[j] 不在lcs中
        // dp(s1, i + 1, s2, j + 1) 第三种情况小于等于情况一、二
      );
    }

    return memo[i][j];
  };

  return dp(text1, 0, text2, 0);
};

var longestCommonSubsequence = function (text1, text2) {
  let m = text1.length,
    n = text2.length;

  let dp = [[0]];

  for (let i = 1; i <= m; i++) {
    dp[i] = [];
    dp[i][0] = 0;
  }

  for (let i = 1; i <= n; i++) dp[0][i] = 0;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1.charAt(i - 1) === text2.charAt(j - 1)) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
      }
    }
  }

  return dp[m][n];
};

// 状态压缩 二维数组 -> 一维数组
var longestCommonSubsequence = function (text1, text2) {
  let m = text1.length,
    n = text2.length;

  let dp = [];

  for (let i = 0; i <= n; i++) {
    dp[i] = 0;
  }

  for (let i = 1; i <= m; i++) {
    let prev = 0; // 存储 dp[i-1][j-1] 的变量
    for (let j = 1; j <= n; j++) {
      let temp = dp[j]; 
      if (text1.charAt(i - 1) === text2.charAt(j - 1)) {
        dp[j] = prev + 1;
      } else {
        dp[j] = Math.max(dp[j - 1], dp[j]);
      }

      prev = temp;
    }
  }

  return dp[n];
};

// console.log(longestCommonSubsequence("bl", "yby"));
// console.log(longestCommonSubsequence("abcde", "ace"));
console.log(longestCommonSubsequence("mhunuzqrkzsnidwbun", "szulspmhwpazoxijwbq"));
