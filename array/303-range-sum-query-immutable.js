/**
 * 区域和检索 - 数组不可变
 *
 * 给定一个整数数组  nums，处理以下类型的多个查询:
 *  计算索引 left 和 right （包含 left 和 right）之间的 nums 元素的 和 ，其中 left <= right
 *
 * 实现 NumArray 类：
 *  NumArray(int[] nums) 使用数组 nums 初始化对象
 *  int sumRange(int i, int j) 返回数组 nums 中索引 left 和 right 之间的元素的 总和 ，
 *  包含 left 和 right 两点（也就是 nums[left] + nums[left + 1] + ... + nums[right] )
 */

/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  const preNums = [];
  const len = nums.length;

  preNums[-1] = 0;

  for (let i = 0; i < len; i++) {
    preNums[i] = preNums[i - 1] + nums[i];
  }

  this.nums = nums;
  this.preNums = preNums;
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  return this.preNums[right] - this.preNums[left - 1];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
