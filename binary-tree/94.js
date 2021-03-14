/**
 * 二叉树的中序遍历
 * 给你二叉树的根结点 root ，返回它节点值的 中序 遍历。
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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  let result = [];

  var inorder = function (root) {
    if (root === null) return;
    inorder(root.left);
    result.push(root.val);
    inorder(root.right);
  };

  inorder(root);
  return result;
};
