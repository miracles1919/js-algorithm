/**
 * 最长递增子序列
 * 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。
 * 子序列是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。
 * 例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。
 *
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  let n = nums.length;
  let dp = new Array(n).fill(1);

  for (i = 0; i < n; i++) {
    for (j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  // sort默认按照编码顺便排序
  dp.sort((a, b) => a - b);
  return dp[n - 1];
};

var lengthOfLIS = function (nums) {
  let n = nums.length;
  let top = new Array(n);
  let piles = 0; //牌堆
  for (i = 0; i < n; i++) {
    let poker = nums[i];

    let left = 0,
      right = piles;

    // 探索左侧边界的二分查找
    while (left < right) {
      let mid = ((left + right) / 2) | 0;
      if (top[mid] > poker) {
        right = mid;
      } else if (top[mid] < poker) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    // 没找到合适的牌 新建一堆
    if (left === piles) piles ++

    // 把这张牌放到牌堆顶部
    top[left] = poker
  }

  return piles
};
