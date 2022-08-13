/**
 * 划分为k个相等的子集
 * 给定一个整数数组  nums 和一个正整数 k，找出是否有可能把这个数组分成 k 个非空子集，其总和都相等。
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function (nums, k) {
  const n = nums.length;
  if (k > n) return false;
  const sum = nums.reduce((a, b) => a + b, 0);
  if (sum % 4 !== 0) return false;
  const target = sum / k;
  const used = new Array(n).fill(false);

  function backtrack(k, bucket, start) {
    if (k === 0) return true;

    if (bucket === target) {
      // 当前桶已满，下个桶开始选择
      return backtrack(k - 1, 0, 0);
    }

    for (let i = start; i < n; i++) {
      if (used[i]) continue;

      // 当前桶装不下
      if (nums[i] + bucket > target) continue;

      bucket += nums[i];
      used[i] = true;

      if (backtrack(k, bucket, i + 1)) {
        return true;
      }

      bucket -= nums[i];
      used[i] = false;
    }

    return false;
  }

  return backtrack(k, 0, 0);
};

var canPartitionKSubsets = function (nums, k) {
  const n = nums.length;
  if (k > n) return false;
  const sum = nums.reduce((a, b) => a + b, 0);
  if (sum % 4 !== 0) return false;
  const target = sum / k;
  const used = new Array(n).fill(false);
  const map = new Map();

  function backtrack(k, bucket, start) {
    if (k === 0) return true;

    if (bucket === target) {
      // 当前桶已满，下个桶开始选择
      const res = backtrack(k - 1, 0, 0);
      map.set(used.join(''), res);
      return res;
    }

    if (map.has(used.join(''))) return map.get(used.join(''));

    for (let i = start; i < n; i++) {
      if (used[i]) continue;

      // 当前桶装不下
      if (nums[i] + bucket > target) continue;

      bucket += nums[i];
      used[i] = true;

      if (backtrack(k, bucket, i + 1)) {
        return true;
      }

      bucket -= nums[i];
      used[i] = false;
    }

    return false;
  }

  return backtrack(k, 0, 0);
};

// 位运算 (used >> i) & 1 表示 used[i]
var canPartitionKSubsets = function (nums, k) {
  const n = nums.length;
  if (k > n) return false;
  const sum = nums.reduce((a, b) => a + b, 0);
  if (sum % 4 !== 0) return false;
  const target = sum / k;
  let used = 0; // 使用位运算
  const map = new Map();

  function backtrack(k, bucket, start) {
    if (k === 0) return true;

    if (bucket === target) {
      // 当前桶已满，下个桶开始选择
      const res = backtrack(k - 1, 0, 0);
      map.set(used, res);
      return res;
    }

    if (map.has(used)) return map.get(used);

    for (let i = start; i < n; i++) {
      if (((used >> i) & 1) === 1) continue;

      // 当前桶装不下
      if (nums[i] + bucket > target) continue;

      bucket += nums[i];
      used |= 1 << i; // i位置为1
      if (backtrack(k, bucket, i + 1)) {
        return true;
      }
      bucket -= nums[i];
      used ^= 1 << i; // 异或将i位置恢复0
    }

    return false;
  }

  return backtrack(k, 0, 0);
};

console.log(canPartitionKSubsets([2, 2, 2, 2, 3, 4, 5], 4));
