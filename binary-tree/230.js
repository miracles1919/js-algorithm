/**
 * 二叉搜索树中第K小的元素
 *
 * 给定一个二叉搜索树的根节点 root ，和一个整数 k ，请你设计一个算法查找其中第 k 个最小元素（从 1 开始计数）。
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */

var kthSmallest = function (root, k) {
  // BST的中序遍历结果是升序排列的结果
  let result = [];
  var inorder = function (root) {
    if (root === null) return;

    inorder(root.left);
    result.push(root.val);
    inorder(root.right);
  };

  inorder(root);

  return result[k - 1];
};
