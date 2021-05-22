/**
 * 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let res = []
  const n = nums.length
  function backtrack(track) {
    if (track.length === n) {
      res.push([...track]);
      return;
    }

    for (let i = 0; i < n; i++) {
      if (track.indexOf(nums[i]) !== -1)  continue

      track.push(nums[i]);
      backtrack(track);
      track.pop();
    }
  }

  backtrack([])
  return res
};
