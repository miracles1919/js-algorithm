/**
 *
 * 俄罗斯套娃信封问题
 * 给你一个二维整数数组 envelopes ，其中 envelopes[i] = [wi, hi] ，表示第 i 个信封的宽度和高度。
 * 当另一个信封的宽度和高度都比这个信封大的时候，这个信封就可以放进另一个信封里，如同俄罗斯套娃一样。
 *
 * 请计算 最多能有多少个 信封能组成一组“俄罗斯套娃”信封（即可以把一个信封放到另一个信封里面）。
 * 注意：不允许旋转信封。
 *
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function (envelopes) {
  // 解法：对w进行升序排序，w相同时，h降序排序，然后计算h的lis

  let n = envelopes.length;

  envelopes.sort((a, b) => (a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]));

  let list = [];
  for (let i = 0; i < n; i++) {
    list[i] = envelopes[i][1];
  }

  return lengthOfLIS(list);
};

// 300 lis
var lengthOfLIS = function (nums) {
  let n = nums.length;
  let top = new Array(n);
  let piles = 0; //牌堆
  for (i = 0; i < n; i++) {
    let poker = nums[i];

    let left = 0,
      right = piles;

    // 探索左侧边界的二分查找
    while (left < right) {
      let mid = ((left + right) / 2) | 0;
      if (top[mid] > poker) {
        right = mid;
      } else if (top[mid] < poker) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    // 没找到合适的牌 新建一堆
    if (left === piles) piles++;

    // 把这张牌放到牌堆顶部
    top[left] = poker;
  }

  return piles;
};
