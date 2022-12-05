/**
 * 回文子串
 */

function countSubstrings(s: string): number {
  const dp = new Array(s.length).fill(1).map(() => new Array(s.length));

  let res = 0;
  for (let r = 0; r < s.length; r++) {
    for (let l = 0; l <= r; l++) {
      if (s[l] === s[r] && (r - l < 2 || dp[l + 1][r - 1])) {
        dp[l][r] = true;
        res++;
      }
    }
  }

  return res;
}
