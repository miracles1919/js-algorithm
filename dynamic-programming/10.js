/**
 * 正则表达式匹配
 * 给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。
 * 例：
 *  s = "aa" p = "a*" => true
 *  s = "ab" p = ".*" => true
 *
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  const cache = new Map();
  const sn = s.length,
    pn = p.length;

  function dp(i, j) {
    if (cache.get(`${i}${j}`)) return cache.get(`${i}${j}`);

    if (j === pn) return i === sn;

    let firstMatch = i <= sn && (p[j] === s[i] || p[j] === ".");

    let ans;
    if (j <= pn - 2 && p[j + 1] === "*") {
      ans =
        dp(i, j + 2) || // 匹配 0 次
        (firstMatch && dp(i + 1, j)); // 匹配s[i]和p[j]后 移动s
    } else {
      ans = firstMatch && dp(i + 1, j + 1);
    }
    cache.set(`${i}${j}`, ans);
    return ans;
  }
  return dp(0, 0);
};

var isMatch = function (s, p) {
  const sn = s.length,
    pn = p.length;

  function matches(i, j) {
    if (i === 0) return false;
    return p[j - 1] === "." || s[i - 1] === p[j - 1];
  }

  // dp[i][j] 表示前j个p是否能匹配前i个s
  const dp = [];
  for (let i = 0; i <= sn; i++) {
    dp[i] = [];
  }

  dp[0][0] = true;

  for (let j = 1; j <= pn; j++) {
    if (p[j - 1] === "*") {
      dp[0][j] = dp[0][j - 2]
    }
  }

  for (let i = 1; i <= sn; i++) {
    for (let j = 1; j <= pn; j++) {

      if (p[j - 1] === "*") {
        dp[i][j] = dp[i][j - 2]
        if (matches(i, j - 1)) {
          dp[i][j] = dp[i][j - 2] || dp[i - 1][j]
        }
      } else {
        if (matches(i, j)) {
          dp[i][j] = dp[i - 1][j - 1];
        }
      }
    }
  }

  return dp[sn][pn] || false;
};

// console.log(isMatch("aab", "c*a*b"))
console.log(isMatch("aaa", "ab*a*c*a"))
// console.log(isMatch("", ".*"))