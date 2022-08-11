/**
 * 组合
 * 给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

var combine = function (n, k) {
  let res = [];

  function backtrack(track, start) {
    if (track.length === k) {
      res.push([...track]);
      return;
    }

    for (let i = start; i <= n; i++) {
      track.push(i);
      backtrack(track, i + 1);
      track.pop();
    }
  }

  backtrack([], 1);
  return res;
};

var combine = function (n, k) {
  let res = [];

  function backtrack(track, start) {
    if (track.length === k) {
      res.push([...track]);
      return;
    }

    // 剪枝
    for (let i = start; i <= n - (k - track.length) + 1; i++) {
      track.push(i);
      backtrack(track, i + 1);
      track.pop();
    }
  }

  backtrack([], 1);
  return res;
};

combine(4, 2);
