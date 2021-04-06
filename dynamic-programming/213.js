/**
 * 打家劫舍 II
 * 你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。
 * 这个地方所有的房屋都 围成一圈 ，这意味着第一个房屋和最后一个房屋是紧挨着的。
 * 同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警 。
 * 给定一个代表每个房屋存放金额的非负整数数组，计算你 在不触动警报装置的情况下 ，能够偷窃到的最高金额。
 *
 * @param {number[]} nums
 * @return {number}
 */

// 三种情况 0 ~ n - 2, 1 ~ n -2 ,1 ~ n - 1
// 在198基础上修改
var rob = function (nums) {
  const cache = {};
  const n = nums.length;

  if (n === 1) return nums[0];

  function dp(nums, start, end) {
    if (start > end) return 0;

    if (cache[`${start},${end}`] !== undefined) return cache[`${start},${end}`];
    let res = Math.max(
      dp(nums, start + 1, end), //不偷 去下一家
      nums[start] + dp(nums, start + 2, end) // 偷 去下下家
    );

    cache[`${start},${end}`] = res;
    return res;
  }
  return Math.max(dp(nums, 0, n - 2), dp(nums, 1, n - 1));
};

var rob = function (nums) {
  const n = nums.length;

  if (n === 1) return nums[0];

  function dpRange(nums, start, end) {
    let dp_i = 0,
      dp_i_1 = 0,
      dp_i_2 = 0;

    for (let i = end; i >= start; i--) {
      dp_i = Math.max(dp_i_1, nums[i] + dp_i_2);
      dp_i_2 = dp_i_1;
      dp_i_1 = dp_i;
    }

    return dp_i;
  }

  return Math.max(dpRange(nums, 0, n - 2), dpRange(nums, 1, n - 1));
};

console.log(rob([1, 2]));
