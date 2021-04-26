/**
 * 有 N 堆香蕉，第 i 堆中有 piles[i] 根香蕉。警卫已经离开了，将在 H 小时后回来。
 * 吃香蕉的速度 K （单位：根/小时）,如果这堆香蕉少于 K 根，她将吃掉这堆的所有香蕉，然后这一小时内不会再吃更多的香蕉。
 * 返回她可以在 H 小时内吃掉所有香蕉的最小速度 K（K 为整数）。
 *
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  let max = Math.max(...piles);
  let canEat = (piles, K, h) => {
    let time = piles.reduce((a, b) => {
      return a + Math.floor(b / K) + (b % K > 0 ? 1 : 0);
    }, 0);
    return time <= h;
  };
  for (let i = 1; i <= max; i++) {
    if (canEat(piles, i, h)) {
      return i;
    }
  }
  return max;
};

// 二分法
var minEatingSpeed = function (piles, h) {
  let max = Math.max(...piles);
  let canEat = (piles, K, h) => {
    let time = piles.reduce((a, b) => {
      return a + Math.floor(b / K) + (b % K > 0 ? 1 : 0);
    }, 0);
    return time <= h;
  };
  let left = 1,
    right = max + 1;

  // 最小值 探索左侧边界
  while (left < right) {
    let mid = left + ((right - left) >> 1);
    if (canEat(piles, mid, h)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

console.log(minEatingSpeed([3, 6, 7, 11], 8));
