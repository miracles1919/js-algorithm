/**
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 *
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 快慢指针
var moveZeroes = function (nums) {
  if (nums.length === 0) return 0;

  let slow = fast = 0;
  let count = 0

  while (fast < nums.length) {
    if (nums[fast] !== 0) {
      nums[slow++] = nums[fast];
    } else {
      count++
    }
    fast++;
  }

  for (let i = 0; i < count; i++) {
    nums[slow + i] = 0;
  }

  return nums;
};

console.log(moveZeroes([0,1,0,3,12]))