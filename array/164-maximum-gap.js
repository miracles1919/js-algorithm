/**
 * 最大间距
 * 给定一个无序的数组，找出数组在排序之后，相邻元素之间最大的差值。
 * 如果数组元素个数小于 2，则返回 0。
 *
 * 说明:
 *  你可以假设数组中所有元素都是非负整数，且数值在 32 位有符号整数范围内。
 *  请尝试在线性时间复杂度和空间复杂度的条件下解决此问题。
 *
 * @param {number[]} nums
 * @return {number}
 */

// 桶排序
var maximumGap = function (nums) {
  const n = nums.length;
  if (n < 2) return 0;

  const maxValue = Math.max(...nums);
  const minValue = Math.min(...nums);
  // 桶大小
  const d = Math.max(1, Math.floor((maxValue - minValue) / (n - 1)));
  const bucketSize = Math.floor((maxValue - minValue) / d) + 1;
  const bucket = new Array(bucketSize).fill(0).map((_) => new Array());

  // 把数字放入桶中
  for (let i = 0; i < n; i++) {
    let idx = Math.floor((nums[i] - minValue) / d);

    // 插入
    let bn = bucket[idx].length;
    let j = bn - 1;

    while (j >= 0) {
      if (bucket[idx][j] > nums[i]) {
        bucket[idx][j + 1] = bucket[idx][j];
        j--;
      } else {
        break;
      }
    }
    bucket[idx][j + 1] = nums[i];
  }

  // 遍历桶
  let prev = -1,
    gap = 0;
  for (let i = 0; i < bucket.length; i++) {
    let b = bucket[i];
    if (!b.length) {
      continue;
    }

    if (prev === -1) {
      prev = b[b.length - 1];
      continue;
    }
    gap = Math.max(b[0] - prev, gap);
    prev = b[b.length - 1];
  }

  return gap;
};

console.log(maximumGap([3, 6, 9, 1]));
console.log(maximumGap([1, 1, 1, 1]));

