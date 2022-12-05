/**
 * 分割回文串
 */

function partition(s: string): string[][] {
  const res: string[][] = [];
  const n = s.length;
  const dp: boolean[][] = new Array(n)
    .fill(0)
    .map(() => new Array(n).fill(true));

  // 注意 i
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      dp[i][j] = s[i] === s[j] && dp[i + 1][j - 1];
    }
  }

  const dfs = (i: number, track: string[]) => {
    if (i === n) {
      res.push(track.slice());
      return;
    }

    for (let j = i; j < n; j++) {
      if (dp[i][j]) {
        track.push(s.slice(i, j + 1));
        dfs(j + 1, track);
        track.pop();
      }
    }
  };
  dfs(0, []);
  return res;
}
