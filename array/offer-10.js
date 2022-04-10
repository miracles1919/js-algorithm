/**
 * 和为 k 的子数组
 * 给定一个整数数组和一个整数 k ，请找到该数组中和为 k 的连续子数组的个数。
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 前缀和
var subarraySum = function (nums, k) {
  const n = nums.length;
  const preSum = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    preSum[i + 1] = preSum[i] + nums[i];
  }
  let res = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      if (preSum[i] - preSum[j - 1] === k) res++;
    }
  }

  return res;
};

// 前缀和 + 哈希表
var subarraySum = function (nums, k) {
  const map = new Map();
  map.set(0, 1);
  let res = 0,
    preSum = 0;
  for (let i = 0; i < nums.length; i++) {
    preSum += nums[i];
    if (map.has(preSum - k)) {
      res += map.get(preSum - k);
    }

    map.set(preSum, (map.get(preSum) || 0) + 1);
  }

  return res;
};
