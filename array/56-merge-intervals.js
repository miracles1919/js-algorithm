/**
 * 合并区间
 * 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。
 * 请你合并所有重叠的区间，并返回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间。
 *
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  const n = intervals.length;
  // 按照左端点升序，排序后的列表中，可以合并的区间一定是连续的
  intervals.sort((a, b) => a[0] - b[0]);
  const res = [intervals[0]];

  for (let i = 1; i < n; i++) {
    const left = res[res.length - 1];
    const right = intervals[i];

    if (left[0] <= right[0] && right[0] <= left[1]) {
      res[res.length - 1] = [left[0], Math.max(left[1], right[1])];
    } else {
      res.push(intervals[i]);
    }
  }
  return res;
};

// merge([
//   [1, 3],
//   [2, 6],
//   [8, 10],
//   [15, 18],
// ]);
// merge([
//   [1, 4],
//   [0, 0],
// ]);
merge([[2,3],[4,5],[6,7],[8,9],[1,10]]);
