/**
 * 子集
 * 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。
 * 解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const n = nums.length;
  let res = [];

  function backtrack(track, start) {
    res.push([...track]);

    for (let i = start; i < n; i++) {
      track.push(nums[i]);
      backtrack(track, i + 1);
      track.pop();
    }
  }

  backtrack([], 0);
  return res;
};

console.log(subsets([1, 2, 3]));
