/**
 * 组合总和 II
 * 给定一个候选人编号的集合 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
 * candidates 中的每个数字在每个组合中只能使用 一次 。
 * 注意：解集不能包含重复的组合。
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const res = [];
  const n = candidates.length;
  candidates.sort((a, b) => a - b);
  let sum = 0;

  function backtrack(track, start) {
    if (sum === target) {
      res.push([...track]);
      return;
    }

    for (let i = start; i < n; i++) {
      if (i > start && candidates[i] === candidates[i - 1]) continue;

      track.push(candidates[i]);
      sum += candidates[i];
      backtrack(track, i + 1);
      track.pop();
      sum -= candidates[i];
    }
  }

  backtrack([], 0);
  return res;
};

combinationSum2([10, 1, 2, 7, 6, 1, 5], 8);
