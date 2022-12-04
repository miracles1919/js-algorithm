/**
 * 移动零
 */

function moveZeroes(nums: number[]): void {
  let slow = 0,
    fast = 0;

  while (fast < nums.length) {
    if (nums[fast] !== 0) {
      nums[slow] = nums[fast];
      slow++;
    }
    fast++;
  }

  for (let i = slow; i < nums.length; i++) {
    nums[i] = 0;
  }
}
