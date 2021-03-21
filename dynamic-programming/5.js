/**
 * 最长回文子串
 *
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function (s) {
  let dp = [];
  let n = s.length;

  for (let i = 0; i <= n; i++) {
    dp[i] = [];
  }

  let res = "";

  for (let l = 0; l < n; l++) {
    for (let i = 0; i + l < n; i++) {
      let j = i + l;

      if (l === 0) dp[i][j] = true;
      else if (l === 1) dp[i][j] = s[i] === s[j];
      else dp[i][j] = s[i] === s[j] && dp[i + 1][j - 1];

      if (dp[i][j] && l >= res.length) {
        res = s.substring(i, j + 1);
      }
    }
  }

  return res;
};


var longestPalindrome = function (s) {
  let palindrome = function (s, i, j) {
    while (i >= 0 && j < s.length && s[i] === s[j]) {
      i--;
      j++;
    }
    return s.substring(i + 1, j - 1 + 1);
  };

  let res = "";
  for (let i = 0; i < s.length; i++) {
    let s1 = palindrome(s, i, i);
    let s2 = palindrome(s, i, i + 1);

    let str = s1.length > s2.length ? s1 : s2;
    res = res.length > str.length ? res : str;
  }

  return res;
};
