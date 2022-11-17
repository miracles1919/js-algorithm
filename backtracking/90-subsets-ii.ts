/**
 * 子集 II
 * 给你一个整数数组 nums ，其中可能包含重复元素，请你返回该数组所有可能的子集（幂集）。
 * 解集 不能 包含重复的子集。返回的解集中，子集可以按 任意顺序 排列。
 */

function subsetsWithDup(nums: number[]): number[][] {
  const res: number[][] = [];
  function backtrack(start: number, track: number[]) {
    res.push([...track]);
    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i] === nums[i - 1]) continue;
      track.push(nums[i]);
      backtrack(i + 1, track);
      track.pop();
    }
  }
  nums.sort((a, b) => a - b);
  backtrack(0, []);
  return res;
}
