/**
 * 三数之和
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。
 * 注意：答案中不可以包含重复的三元组。
 *
 * @param {number[]} nums
 * @return {number[][]}
 */

/*
 * 本题难点在于如何去除重复解
 * 1、排序
 * 2、遍历排序后数组
 *  a) 若nums[i] > 0，由于已经排序，不满足相加为 0
 *  b) 跳过重复元素
 *  c) 双指针，令l = i + 1，r = n - 1
 *    c.1 和 = 0，移动 l，r
 *    c.2 和 > 0，说明 nums[r] 太大，r 左移
 *    c.3 和 < 0，说明 nums[l] 太小，l 右移
 */
var threeSum = function (nums) {
  const n = nums.length;
  const res = [];
  if (n < 3) return res;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < n; i++) {
    const num = nums[i];
    if (num > 0) continue;

    if (i > 0 && num === nums[i - 1]) continue;

    let l = i + 1,
      r = n - 1;
    while (l < r) {
      let sum = num + nums[l] + nums[r];

      if (sum === 0) {
        res.push([num, nums[l], nums[r]]);
        // 去重
        while (l < r && nums[l] === nums[l + 1]) l++;
        while (l < r && nums[r] === nums[r - 1]) r--;
        l++;
        r--;
      } else if (sum > 0) {
        r--;
      } else if (sum < 0) {
        l++;
      }
    }
  }

  return res;
};

// console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([-2, 0, 0, 2, 2]));
