/**
 * 子集
 * 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。
 * 解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。
 */

function subsets(nums: number[]): number[][] {
  const res: number[][] = [];
  function backtrack(start: number, track: number[]) {
    res.push([...track]);
    for (let i = start; i < nums.length; i++) {
      if (track.includes(nums[i])) continue;
      track.push(nums[i]);
      backtrack(i + 1, track);
      track.pop();
    }
  }
  backtrack(0, []);
  return res;
}
