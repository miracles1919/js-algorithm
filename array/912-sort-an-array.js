/**
 * 排序数组
 * 给你一个整数数组 nums，请你将该数组升序排列。
 *
 * @param {number[]} nums
 * @return {number[]}
 */

// 冒泡
var sortArray = function (nums) {
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    // 判断有无数据交换
    let flag = false;

    // 注意这里的边界 每次冒泡至少会让一个元素移动到相应位置
    for (let j = 0; j < n - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
        flag = true;
      }
    }

    if (!flag) break;
  }
  return nums;
};

// 插入
var sortArray = function (nums) {
  const n = nums.length;
  for (let i = 1; i < n; i++) {
    let value = nums[i];
    let j = i - 1;

    for (; j >= 0; j--) {
      if (nums[j] > value) {
        nums[j + 1] = nums[j];
      } else {
        break;
      }
    }

    nums[j + 1] = value;
  }

  return nums;
};

// 选择
var sortArray = function (nums) {
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    let min = i;

    for (let j = i + 1; j < n; j++) {
      if (nums[j] < nums[min]) {
        min = j;
      }
    }

    [nums[i], nums[min]] = [nums[min], nums[i]];
  }

  return nums;
};

// 归并
var sortArray = function (nums) {
  function mergeSort(nums, left, right) {
    if (left >= right) {
      return nums;
    }

    let mid = (left + right) >> 1;
    mergeSort(nums, left, mid);
    mergeSort(nums, mid + 1, right);
    return merge(nums, left, mid, right);
  }

  function merge(nums, left, mid, right) {
    let arr = [];
    let i = left,
      j = mid + 1,
      k = 0;
    while (i <= mid && j <= right) {
      arr[k++] = nums[i] <= nums[j] ? nums[i++] : nums[j++];
    }

    // 判断剩余
    while (i <= mid) {
      arr[k++] = nums[i++];
    }
    while (j <= right) {
      arr[k++] = nums[j++];
    }

    // 将arr数组拷贝回nums
    for (let m = 0; m < arr.length; m++) {
      nums[m + left] = arr[m];
    }

    return nums;
  }

  return mergeSort(nums, 0, nums.length - 1);
};

// 快排
var sortArray = function (nums) {
  function quickSort(nums, left, right) {
    // console.log('left:', left, 'rigth:', right);
    if (left >= right) return nums;

    let q = partition(nums, left, right);
    quickSort(nums, left, q - 1);
    quickSort(nums, q + 1, right);
  }

  // partition 选择一个元素作为pivot, 分区，并返回pivot下标

  // 这里用最后一个元素作为 pivot
  // function partition(nums, left, right) {
  //   // 这里用最后一个元素作为 pivot
  //   let pivot = nums[right];
  //   let i = left;
  //   for (let j = left; j < right; j++) {
  //     if (nums[j] < pivot) {
  //       [nums[j], nums[i]] = [nums[i], nums[j]];
  //       i++;
  //     }
  //   }
  //   [nums[i], nums[right]] = [nums[right], nums[i]];
  //   return i;
  // }

  // 优化：随机选择一个元素作为 pivot
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

var nums = [5, 1, 1, 2, 0, 0];
// var nums = [0, 25063, 5, 25062, 7, 25061, 9, 25060, 11];
console.log(sortArray(nums));
