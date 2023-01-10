/**
 * 组合总和 II
 * 给定一个候选人编号的集合 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
 * candidates 中的每个数字在每个组合中只能使用 一次 。
 * 注意：解集不能包含重复的组合。
 */

{
  function combinationSum2(candidates: number[], target: number): number[][] {
    const res: number[][] = [];
    candidates.sort((a, b) => a - b);
    const dfs = (start: number, track: number[], sum: number) => {
      if (sum > target) return;
      if (sum === target) {
        res.push([...track]);
        return;
      }

      for (let i = start; i < candidates.length; i++) {
        if (i > start && candidates[i] === candidates[i - 1]) continue;
        const num = candidates[i];
        track.push(num);
        dfs(i + 1, track, sum + num);
        track.pop();
      }
    };

    dfs(0, [], 0);
    return res;
  }
}
