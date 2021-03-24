/**
 * 分割等和子集
 * 给定一个只包含正整数的非空数组。是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。
 * 注意:
 *
 *
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  let sum = nums.reduce((a, b) => a + b, 0);
  if (sum % 2 === 1) return false;

  let target = sum >> 1;
  let n = nums.length;

  // dp[i][j] 对于0...i个元素，当前背包容量为j时 是否恰好能装满
  let dp = [];
  for (let i = 0; i <= n; i++) {
    dp[i] = [];
    dp[i][0] = true;
  }

  for (let i = 1; i <= n; i++) {
    for (j = 1; j <= target; j++) {
      if (j - nums[i - 1] < 0) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]];
      }
    }
  }

  return dp[n][target] || false;
};

var canPartition = function (nums) {
  let sum = nums.reduce((a, b) => a + b, 0);
  if (sum % 2 === 1) return false;

  let n = nums.length;
  let target = sum >> 1;

  let dp = [true];

  for (let i = 1; i <= n; i++) {
    for (j = target; j >= 0; j--) {
      //j需要从后往前遍历 因为每个数字只能用一次
      if (j - nums[i - 1] >= 0) {
        dp[j] = dp[j] || dp[j - nums[i - 1]];
      }
    }
  }

  return dp[target] || false;
};

console.log(canPartition([1, 5, 11, 5]));
// console.log(canPartition([1, 2, 3, 5]));
