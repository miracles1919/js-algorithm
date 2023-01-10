/**
 * 组合总和
 * 给你一个 无重复元素 的整数数组 candidates 和一个目标整数 target ，
 * 找出 candidates 中可以使数字和为目标数 target 的 所有 不同组合 ，
 * 并以列表形式返回。你可以按 任意顺序 返回这些组合。
 */

{
  function combinationSum(candidates: number[], target: number): number[][] {
    const res: number[][] = [];
    const dfs = (start: number, track: number[], sum: number) => {
      if (sum > target) return;

      if (sum === target) {
        res.push([...track]);
        return;
      }

      for (let i = start; i < candidates.length; i++) {
        const num = candidates[i];
        track.push(num);
        dfs(i, track, num + sum);
        track.pop();
      }
    };
    dfs(0, [], 0);
    return res;
  }
}
