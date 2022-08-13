/**
 * 全排列 II
 * 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const res = [];
  const n = nums.length;
  const used = new Array(n).fill(false);
  nums.sort((a, b) => a - b);

  function backtrack(track) {
    if (track.length === n) {
      res.push([...track]);
      return;
    }

    let prev = -100;
    for (let i = 0; i < n; i++) {
      if (used[i]) continue;

      // 剪枝：保证相同元素的相对位置保持不变
      if (prev === nums[i]) continue;

      track.push(nums[i]);
      used[i] = true;
      prev = nums[i];
      backtrack(track);
      track.pop();
      used[i] = false;
    }
  }

  backtrack([]);
  return res;
};

permuteUnique([1, 1, 2]);
