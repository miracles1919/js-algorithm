/**
 * 验证回文字符串 III
 */

{
  function isValidPalindrome(s: string, k: number): boolean {
    const n = s.length;
    const dp = new Array(n).fill(0).map(() => new Array(n).fill(0));

    for (let i = n - 1; i >= 0; i--) {
      dp[i][i] = 1;
      for (let j = i + 1; j < n; j++) {
        if (s[i] === s[j]) {
          dp[i][j] = dp[i + 1][j - 1] + 2;
        } else {
          dp[i][j] = Math.max(dp[i][j - 1], dp[i + 1][j]);
        }
      }
    }

    return dp[0][n - 1] + k >= n;
  }
}
