/**
 * 最长连续序列
 * 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。
 * 进阶：你可以设计并实现时间复杂度为 O(n) 的解决方案吗？
 *
 *
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const set = new Set();
  for (const num of nums) {
    set.add(num);
  }

  let res = 0;

  // 假设以 i 为起点匹配，那么跳过 i - 1，否则会以 i - 1 为起点开始匹配
  for (const num of set) {
    if (!set.has(num - 1)) {
      let current = num;
      let len = 1
      while (set.has(current + 1)) {
        current ++
        len ++
      }
      res = Math.max(res, len)
    }
  }

  return res;
};

// console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutive([]));
