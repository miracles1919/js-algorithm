/**
 * 随机数索引
 * 给定一个可能含有重复元素的整数数组，要求随机输出给定的数字的索引。 您可以假设给定的数字一定存在于数组中。
 * 注意：
 * 数组大小可能非常大。 使用太多额外空间的解决方案将不会通过测试。
 */
var Solution = function (nums) {
  this.nums = nums;
};

/**
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function (target) {
  let res = [];
  for (let i = 0; i < this.nums.length; i++) {
    if (this.nums[i] === target) {
      res.push(i);
    }
  }

  let randomIndex = Math.floor(Math.random() * res.length);

  return res[randomIndex];
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */

// 蓄水池抽样
Solution.prototype.pick = function (target) {
  let count = 0
  let index = 0

  for (let i = 0; i < this.nums.length; i++) {
    if (this.nums[i] === target) {
      count ++

      // 以1/n的概率保留
      if (Math.random() < (1 / count)) {
        index = i
      }
    }
  }

  return index;
};
