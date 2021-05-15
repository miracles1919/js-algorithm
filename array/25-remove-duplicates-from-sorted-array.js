/**
 * 给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。
 * 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
 *
 * 你可以想象内部操作如下:
 * int len = removeDuplicates(nums);
 *
 * for (int i = 0; i < len; i++) {
 *  print(nums[i]);
 * }
 *
 * @param {number[]} nums
 * @return {number}
 */
// 常规解法
var removeDuplicates = function (nums) {
  const map = {};
  for (let i = 0; i < nums.length; ) {
    const num = nums[i];
    if (map[num] === undefined) {
      map[num] = num;
      i++;
    } else {
      nums.splice(i, 1);
    }
  }
  return nums.length;
};

// 快慢指针
var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;

  let slow = fast = 0

  // 当fast遍历完数组，nums[0...slow]就是不重复元素
  while(fast < nums.length) {
    if (nums[fast] !== nums[slow]) {
      slow ++
      nums[slow] = nums[fast]
    }
    fast ++
  }

  return slow + 1
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
