/**
 * 打家劫舍
 * 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，
 * 如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
 * 给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。
 *
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const cache = {};
  function dp(nums, start) {
    if (start >= nums.length) return 0;

    if (cache[start] !== undefined) return cache[start];
    let res = Math.max(
      dp(nums, start + 1), //不偷 去下一家
      nums[start] + dp(nums, start + 2) // 偷 去下下家
    );

    cache[start] = res;
    return res;
  }
  return dp(nums, 0);
};

var rob = function (nums) {
  const n = nums.length;
  // dp[i] 表示从第i间房 能偷到的最高金额
  const dp = new Array(n + 2).fill(0);

  for (let i = n - 1; i >= 0; i--) {
    // const element = nums[i];
    dp[i] = Math.max(dp[i + 1], nums[i] + dp[i + 2]);
  }

  return dp[0];
};

var rob = function (nums) {
  const n = nums.length;
  let dp_i = 0,
    dp_i_1 = 0,
    dp_i_2 = 0;

  for (let i = n - 1; i >= 0; i--) {
    dp_i = Math.max(dp_i_1, nums[i] + dp_i_2);
    dp_i_2 = dp_i_1;
    dp_i_1 = dp_i;
  }
  return dp_i;
};

console.log(rob([1, 2, 3, 1]));
