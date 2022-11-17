/**
 * 组合
 * 给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。
 */

function combine(n: number, k: number): number[][] {
  const res: number[][] = [];
  function backtrack(start: number, track: number[]) {
    if (track.length === k) {
      res.push([...track]);
      return;
    }

    // 剪枝
    // i <= n - (k - track.length) + 1
    for (let i = start; i <= n; i++) {
      if (track.includes(i)) continue;
      track.push(i);
      backtrack(i + 1, track);
      track.pop();
    }
  }
  backtrack(1, []);
  return res;
}
