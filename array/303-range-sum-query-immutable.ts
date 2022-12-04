/**
 * 区域和检索 - 数组不可变
 */

{
  class NumArray {
    nums: number[];

    constructor(nums: number[]) {
      this.nums = nums;
    }

    sumRange(left: number, right: number): number {
      let sum = 0;
      for (let i = left; i <= right; i++) {
        sum += this.nums[i];
      }
      return sum;
    }
  }
}

{
  class NumArray {
    preSums: number[];

    constructor(nums: number[]) {
      const preSums = new Array(nums.length + 1).fill(0);
      for (let i = 1; i < preSums.length; i++) {
        preSums[i] = preSums[i - 1] + nums[i - 1];
      }
      this.preSums = preSums;
    }

    sumRange(left: number, right: number): number {
      return this.preSums[right + 1] - this.preSums[left];
    }
  }
}
