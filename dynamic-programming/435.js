/**
 * 无重叠区间
 * 给定一个区间的集合，找到需要移除区间的最小数量，使剩余区间互不重叠。
 *
 * 注意:
 *  1.可以认为区间的终点总是大于它的起点。
 *  2.区间 [1,2] 和 [2,3] 的边界相互“接触”，但没有相互重叠。
 *
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  let n = intervals.length;
  if (n < 2) return 0;
  return n - intervalScheduling(intervals);
};

// 贪心算法 - 区间调度算法
function intervalScheduling(intervals) {
  // 按照end升序
  intervals.sort((a, b) => a[1] - b[1]);

  let count = 1;
  let end = intervals[0][1];

  for (let i = 0; i < intervals.length; i++) {
    let start = intervals[i][0];

    if (start >= end) {
      count++;
      end = intervals[i][1];
    }
  }
  return count;
}


console.log(eraseOverlapIntervals([[1,2],[2,3]]));
// console.log(eraseOverlapIntervals([ [1,2], [2,3], [3,4], [1,3] ]))
