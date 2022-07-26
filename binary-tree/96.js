/**
 * 不同的二叉搜索树
 * 给你一个整数 n ，求恰由 n 个节点组成且节点值从 1 到 n 互不相同的 二叉搜索树 有多少种？返回满足题意的二叉搜索树的种数。
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var numTrees = function (n) {
  // 定义：[lo,hi]区间能组成count(lo,hi)种BST
  function count(lo, hi) {
    // 注意这里是 1
    if (lo > hi) return 1;

    let res = 0;
    for (let i = lo; i <= hi; i++) {
      // i 作为根节点，计算左右子树
      const left = count(lo, i - 1);
      const right = count(i + 1, hi);
      // 左右子树的乘积是BST的总数
      res += left * right;
    }

    return res;
  }

  return count(1, n);
};

// 优化
var numTrees = function (n) {
  const map = new Map();

  function count(lo, hi) {
    // 注意这里是 1
    if (lo > hi) return 1;

    const key = `${lo}${hi}`;
    const val = map.get(key);
    if (val) return val;

    let res = 0;
    for (let i = lo; i <= hi; i++) {
      // i 作为根节点，计算左右子树
      const left = count(lo, i - 1);
      const right = count(i + 1, hi);
      // 左右子树的乘积是BST的总数
      res += left * right;
    }
    map.set(key, res);
    return res;
  }

  return count(1, n);
};
