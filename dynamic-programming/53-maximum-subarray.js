/**
 * 最大子序和
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 *
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  const m = nums.length;
  const dp = [nums[0]];
  let res = nums[0];

  for (let i = 1; i < m; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
    res = Math.max(dp[i], res);
  }

  return res;
};

// 状态压缩
var maxSubArray = function (nums) {
  const m = nums.length;
  let res = prev = nums[0];

  for (let i = 1; i < m; i++) {
    prev = Math.max(prev + nums[i], nums[i]);
    res = Math.max(prev, res);
  }

  return res;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
