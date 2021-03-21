/**
 *
 * 两个字符串的最小ASCII删除和
 * 给定两个字符串s1, s2，找到使两个字符串相等所需删除字符的ASCII值的最小和。
 * 示例：
 *  输入输入: s1 = "sea", s2 = "eat"
 *  输出: 231
 *  解释: 在 "sea" 中删除 "s" 并将 "s" 的值(115)加入总和。
 *  在 "eat" 中删除 "t" 并将 116 加入总和。
 *  结束时，两个字符串相等，115 + 116 = 231 就是符合条件的最小和。
 *
 *
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function (s1, s2) {
  let memo = [];

  for (let i = 0; i < s1.length; i++) {
    memo[i] = [];
  }

  // 计算s[i...]和s2[j...]的最小ASCII删除和
  let dp = function (s1, i, s2, j) {
    let res = 0;

    // base case
    if (i === s1.length) {
      // 如果s1到头，删除s2剩余字符
      while (j < s2.length) {
        res += s2.charCodeAt(j++);
      }
      return res;
    }

    if (j === s2.length) {
      // 同理
      while (i < s1.length) {
        res += s1.charCodeAt(i++);
      }
      return res;
    }

    if (memo[i][j]) return memo[i][j];

    if (s1.charAt(i) === s2.charAt(j)) {
      memo[i][j] = dp(s1, i + 1, s2, j + 1);
    } else {
      memo[i][j] = Math.min(
        dp(s1, i + 1, s2, j) + s1.charCodeAt(i),
        dp(s1, i, s2, j + 1) + s2.charCodeAt(j)
      );
    }

    return memo[i][j];
  };

  return dp(s1, 0, s2, 0);
};

console.log(minimumDeleteSum("sea", "eat"));
