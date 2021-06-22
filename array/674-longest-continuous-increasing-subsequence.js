/**
 * 最长连续递增序列
 * 给定一个未经排序的整数数组，找到最长且 连续递增的子序列，并返回该序列的长度。
 * 连续递增的子序列 可以由两个下标 l 和 r（l < r）确定，如果对于每个 l <= i < r，都有 nums[i] < nums[i + 1] ，
 * 那么子序列 [nums[l], nums[l + 1], ..., nums[r - 1], nums[r]] 就是连续递增子序列。
 *
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  if (!nums.length) return 0;
  let res = 1, len = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      len++;
      res = Math.max(res, len);
    } else {
      len = 1;
    }
  }

  return res;
};

// 贪心算法
var findLengthOfLCIS = function (nums) {
  let res = 0, start = 0
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] <= nums[i - 1]) {
      start = i
    }
    res = Math.max(res, i - start + 1)
    
  }
  return res
}

console.log(findLengthOfLCIS([1, 2, 3, 4, 5]));
