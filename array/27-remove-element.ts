/**
 * 移除元素
 * （原地删除）
 */

{
  function removeElement(nums: number[], val: number): number {
    let slow = 0,
      fast = 0;
    while (fast < nums.length) {
      if (nums[fast] !== val) {
        nums[slow] = nums[fast];
        slow++;
      }
      fast++;
    }
    return slow;
  }
}

{
  function removeElement(nums: number[], val: number): number {
    let left = 0,
      right = nums.length;
    while (left < right) {
      if (nums[left] === val) {
        nums[left] = nums[right - 1];
        right--;
      } else {
        left++;
      }
    }
    return right;
  }
}
