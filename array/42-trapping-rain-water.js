/**
 * 接雨水
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 *
 *
 * @param {number[]} height
 * @return {number}
 */

// 思路：https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247487733&idx=1&sn=f27307be00bdbbbcf9bee4c46e793f83&chksm=9bd7eefdaca067eb96fd2027ed501e9c3d0a26c56fd1664387a7d5c4b852821573777ff14efc&scene=21#wechat_redirect
// 暴力法 时间复杂度 O(n2)  空间复杂度 O(1)
var trap = function (height) {
  const n = height.length;
  let res = 0;

  for (let i = 0; i < n; i++) {
    let lMax = 0,
      rMax = 0;
    for (let j = 0; j < i; j++) {
      lMax = Math.max(lMax, height[j]);
    }

    for (let j = i + 1; j < n; j++) {
      rMax = Math.max(rMax, height[j]);
    }

    let w = Math.min(lMax, rMax) - height[i];
    res += w > 0 ? w : 0;
  }

  return res;
};

// 备忘录 提前计算 lmax rmax
// 时间复杂度 O(n)  空间复杂度 O(n)
var trap = function (height) {
  const n = height.length;

  if (n == 0) return 0;

  let res = 0;
  const lMax = [height[0]]; // 表示 height[0..i]的最高柱子
  const rMax = [];
  rMax[n - 1] = height[n - 1]

  for (let i = 1; i < n; i++) {
    lMax[i] = Math.max(lMax[i - 1], height[i]);
  }

  for (let i = n - 2; i >= 0; i--) {
    rMax[i] = Math.max(rMax[i + 1], height[i]);
  }

  for (let i = 0; i < n; i++) {
    let w = Math.min(lMax[i], rMax[i]) - height[i];
    res += w > 0 ? w : 0;
  }

  return res;
};

// 双指针 时间复杂度 O(n)  空间复杂度 O(1)
var trap = function (height) {
  const n = height.length;

  if (n == 0) return 0;

  let res = 0;
  let left = 0, right = n - 1;
  // lmax 表示[0..left]的最高柱子 rmax 表示[right..n]的最高柱子
  let lMax = height[0], rMax = height[n - 1]; 

  while(left <= right) {

    lMax = Math.max(lMax, height[left])
    rMax = Math.max(rMax, height[right])

    if (lMax < rMax) {
      let w = lMax - height[left]
      res += w > 0 ? w : 0;
      left ++
    } else {
      let w = rMax - height[right]
      res += w > 0 ? w : 0;
      right --
    }
  }
  return res
} 

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))
console.log(trap([4, 2, 0, 3, 2, 5]));
