/**
 * 排列序列
 * 给出集合 [1,2,3,...,n]，其所有元素共有 n! 种排列。
 * 按大小顺序列出所有排列情况，并一一标记，当 n = 3 时, 所有排列如下：
 * "123"
 * "132"
 * "213"
 * "231"
 * "312"
 * "321"
 *
 * 给定 n 和 k，返回第 k 个排列。
 *
 * @param {number} n
 * @param {number} k
 * @return {string}
 */

/*
 * 参考 https://leetcode-cn.com/problems/permutation-sequence/solution/hui-su-jian-zhi-python-dai-ma-java-dai-ma-by-liwei/
 */
var getPermutation = function (n, k) {
  const factorial = calcFactorial(n);
  const used = [];
  const ans  = []
  dfs(0, ans);

  // index 表示选择了几个数字
  function dfs(index, track) {
    if (index === n) return;

    const num = factorial[n - index - 1];
    for (let i = 1; i <= n; i++) {
      if (used[i]) {
        continue;
      }

      // 剪枝
      if (num < k) {
        k -= num;
        continue;
      }

      track.push(i);
      used[i] = true;
      dfs(index + 1, track);
      // 这里不可以回溯，算法设计是 直接到达叶子节点
      // return 是个优化，后面的数不需要遍历了
      return
    }
  }

  // 计算阶乘
  function calcFactorial(n) {
    const res = [1];
    for (let i = 1; i < n; i++) {
      res[i] = res[i - 1] * i;
    }
    return res
  }

  return ans.join('')
};


console.log(getPermutation(3, 3))
console.log(getPermutation(4, 9))