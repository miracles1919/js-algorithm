/**
 * 两个字符串的删除操作
 * 给定两个单词 word1 和 word2，找到使得 word1 和 word2 相同所需的最小步数，每步可以删除任意一个字符串中的一个字符。
 *
 * 示例：
 *  输入: "sea", "eat"
 *  输出: 2
 *  解释: 第一步将"sea"变为"ea"，第二步将"eat"变为"ea"
 *
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  // 最长公共子序列长度 详见1143
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

  let num = longestCommonSubsequence(word1, word2);
  return word1.length - num + word2.length - num;
};


console.log(minDistance("sea", "eat"))