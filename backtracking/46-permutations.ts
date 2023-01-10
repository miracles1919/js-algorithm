/**
 * 全排列
 * 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
 */

{
  function permute(nums: number[]): number[][] {
    const n = nums.length;
    const res: number[][] = [];
    function backtrack(track: number[]) {
      if (track.length === n) {
        res.push([...track]);
        return;
      }
      for (let i = 0; i < n; i++) {
        if (track.includes(nums[i])) continue;
        track.push(nums[i]);
        backtrack(track);
        track.pop();
      }
    }
    backtrack([]);
    return res;
  }
}
