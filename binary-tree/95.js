/**
 * 不同的二叉搜索树 II
 * 给你一个整数 n ，请你生成并返回所有由 n 个节点组成且节点值从 1 到 n 互不相同的不同 二叉搜索树 。可以按 任意顺序 返回答案。
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
var generateTrees = function (n) {
  function createTrees(lo, hi) {
    let res = [];
    if (lo > hi) {
      res.push(null);
      return res;
    }

    for (let i = lo; i <= hi; i++) {
      const leftTrees = createTrees(lo, i - 1);
      const rightTrees = createTrees(i + 1, hi);

      leftTrees.forEach((leftNode) => {
        rightTrees.forEach((rightNode) => {
          const root = new TreeNode(i, leftNode, rightNode);
          res.push(root);
        });
      });
    }

    return res;
  }

  return createTrees(1, n);
};
