/**
 * 数组中的第K个最大元素
 * 在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const target = nums.length - k;
  const sortNums = sortArray(nums, target);
  return sortNums[target];
};

// 快排
var sortArray = function (nums, target) {
  function quickSort(nums, left, right) {
    if (left >= right) return nums;

    const q = partition(nums, left, right);
    if (q == target) {
      // 优化，当 q 为倒数第k个元素的下标时，即可满足题意
      return nums;
    }
    quickSort(nums, left, q - 1);
    quickSort(nums, q + 1, right);
  }

  // 返回pivot下标
  function partition(nums, left, right) {
    let p = Math.round(Math.random() * (right - left)) + left;
    let pivot = nums[p];
    let i = left;
    for (let j = left; j <= right; j++) {
      if (j == p) {
        continue;
      }

      if (nums[j] < pivot) {
        [nums[j], nums[i]] = [nums[i], nums[j]];
        i++;

        if (nums[j] == pivot) {
          p = j;
        }
      }
    }
    [nums[p], nums[i]] = [nums[i], nums[p]];

    return i;
  }

  quickSort(nums, 0, nums.length - 1);
  return nums;
};

var findKthLargest = function (nums, k) {
  const heap = buildHeap(nums);
  return heapSort(heap, k);
};

// 建堆
function buildHeap(nums) {
  const a = [, ...nums];
  const n = a.length;

  // [n/2 + 1...n] 为叶子节点，不需要堆化
  for (let i = n >> 1; i >= 1; i--) {
    heapify(a, n, i);
  }
  return a;
}

// 自上往下堆化
function heapify(a, n, i) {
  while (true) {
    let maxPos = i;
    if (i * 2 <= n && a[i] < a[i * 2]) maxPos = i * 2;
    if (i * 2 + 1 <= n && a[maxPos] < a[i * 2 + 1]) maxPos = i * 2 + 1;
    if (maxPos == i) break;

    [a[i], a[maxPos]] = [a[maxPos], a[i]];
    i = maxPos;
  }
}

// 堆排序
function heapSort(a, target) {
  let i = a.length - 1;
  while (i > 1) {
    if (i + target == a.length) {
      return a[1];
    }
    [a[i], a[1]] = [a[1], a[i]];
    i--;
    heapify(a, i, 1);
  }
  return a[1];
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
console.log(findKthLargest([-1, 2, 0], 3));
