/**
 * 目标和
 * 给定一个非负整数数组，a1, a2, ..., an, 和一个目标数，S。现在你有两个符号 + 和 -。
 * 对于数组中的任意一个整数，你都可以从 + 或 -中选择一个符号添加在前面。
 * 返回可以使最终数组和为目标数 S 的所有添加符号的方法数。
 *
 * 提示：
 *  数组非空，且长度不会超过 20 。
 *  初始的数组的和不会超过 1000 。
 *  保证返回的最终结果能被 32 位整数存下。
 *
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */

// 0-1背包
var findTargetSumWays = function (nums, S) {
  if (S > 1000) return 0;

  let n = nums.length;
  let sum = nums.reduce((a, b) => a + b, 0);

  if (sum < S) return 0;

  // dp[i][j] 对于0...i个元素，组合和为j的方法数
  let dp = [];
  for (let i = 0; i < n; i++) {
    dp[i] = [];
  }
  dp[0][nums[0]] = 1;
  dp[0][-nums[0]] = (dp[0][-nums[0]] || 0) + 1; // += 处理 num[0]为0时

  for (let i = 1; i < n; i++) {
    for (let j = -sum; j <= sum; j++) {
      dp[i][j] = (dp[i - 1][j - nums[i]] || 0) + (dp[i - 1][j + nums[i]] || 0);
    }
  }

  return dp[n - 1][S] || 0;
};

// 假设所有符号为 + 的元素和为x，- 的元素和的绝对值为y
// S = x - y, sum = x + y  => x = (S + sum) / 2
// 即转化为装满容量为x的背包 有多少种方法
var findTargetSumWays = function (nums, S) {
  if (S > 1000) return 0;
  let sum = nums.reduce((a, b) => a + b, 0);

  if (sum < S || (S + sum) % 2 === 1) return 0;

  // dp[j] 表示 装满容量为i的背包，有dp[j]种方法
  // 状态转移方程 dp[j] = dp[j] + dp[j-num]
  let dp = [1];
  let n = nums.length;
  let target = (S + sum) >> 1;

  for (let i = 0; i < n; i++) {
    for (let j = target; j >= 0; j--) {
      dp[j] = (dp[j] || 0) + (dp[j - nums[i]] || 0);
    }
  }

  return dp[target];
};

console.log(findTargetSumWays([1, 1, 1, 1, 1], 3));
console.log(findTargetSumWays([0, 0, 0, 0, 0, 0, 0, 0, 1], 1));
