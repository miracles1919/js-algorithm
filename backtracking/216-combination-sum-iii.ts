/**
 * 组合总和 III
 * 找出所有相加之和为 n 的 k 个数的组合，且满足下列条件：
 *  只使用数字1到9
 *  每个数字 最多使用一次
 */

function combinationSum3(k: number, n: number): number[][] {
  const res: number[][] = [];
  const max = 9;
  const dfs = (start: number, track: number[], sum: number) => {
    if (sum > n) return;

    if (sum === n) {
      if (track.length === k) {
        res.push([...track]);
      }
      return;
    }

    for (let i = start; i <= max; i++) {
      if (track.includes(i)) continue;
      track.push(i);
      dfs(i + 1, track, sum + i);
      track.pop();
    }
  };
  dfs(1, [], 0);
  return res;
}
