/**
 * 有效三角形的个数
 * 给定一个包含非负整数的数组，你的任务是统计其中可以组成三角形三条边的三元组个数。
 *
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function (nums) {
  if (!nums.length || nums.length < 3) return 0;

  // 三角形任意两边和大于第三边 对a,b,c排序后 天然满足a + c > b b + c > a
  // 只要判断 a + b > c
  nums.sort((a, b) => a - b);
  let count = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    let j = i + 1,
      k = j + 1;

    while (j <= nums.length - 1) {
      if (nums[i] + nums[j] > nums[k]) {
        console.log(nums[i], nums[j], nums[k]);
        count++;
        k++;
      } else {
        j++;
        k = j + 1;
      }
    }
  }

  return count;
};

// 优化
var triangleNumber = function (nums) {
  if (!nums.length || nums.length < 3) return 0;
  let count = 0;

  nums.sort((a, b) => a - b); // 升序

  for (let k = nums.length - 1; k > 1; k--) {
    let i = 0, j = k - 1;
    while (i < j) {
      // nums[i] < nums[k] && nums[j] < nums[k] 
      if (nums[i] + nums[j] > nums[k]) {
        count += j - i;
        j--
      } else {
        i++
      }
    }
  }
  return count;
};

console.log(triangleNumber([1, 2, 3, 4, 5, 6]));

// 2,3,4
// 2,5,6
