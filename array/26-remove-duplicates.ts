/**
 * 删除有序数组中的重复项
 * （原地修改）
 */

function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) return 0;
  let slow = 0,
    fast = 0;
  while (fast < nums.length) {
    if (nums[slow] !== nums[fast]) {
      nums[slow++] = nums[fast];
    }
    fast++;
  }
  return slow + 1;
}
