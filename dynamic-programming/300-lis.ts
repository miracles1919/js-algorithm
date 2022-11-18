/**
 * 最长递增子序列
 * 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。
 * 子序列是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。
 * 例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。
 */

function lengthOfLIS(nums: number[]): number {
  const n = nums.length;
  // dp[i] 表示以 nums[i] 结尾的最长递增子序列的长度
  const dp = new Array(n).fill(1);

  for (let i = 0; i < n; i++) {
    for (let j = 0; i < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  dp.sort((a, b) => a - b);
  return dp[n - 1];
}

function lengthOfLIS2(nums: number[]): number {
  const n = nums.length;
  let len = 1;
  if (n === 0) return 0;

  // dp[i] 表示长度为 i 的最长递增子序列的末尾元素的最小值
  const d = new Array(n + 1);
  d[len] = nums[0];
  for (let i = 0; i < n; i++) {
    if (nums[i] > d[len]) {
      d[++len] = nums[i];
    } else {
      // 二分查找
      let l = 1,
        r = len,
        pos = 0;
      while (l <= r) {
        const mid = (l + r) >> 1;
        if (d[mid] < nums[i]) {
          pos = mid;
          l = mid + 1;
        } else {
          r = mid - 1;
        }
      }
      d[pos + 1] = nums[i];
    }
  }

  return len;
}
