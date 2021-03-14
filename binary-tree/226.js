/**
 * 翻转一棵二叉树。
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (root === null) return null;

  // 前序遍历位置
  let temp = root.left;
  root.left = root.right;
  root.right = temp;

  invertTree(root.left);
  invertTree(root.right);

  return root;
};

var invertTree = function (root) {
  if (root === null) return null;

  invertTree(root.left);
  invertTree(root.right);

  // 后序遍历位置
  let temp = root.left;
  root.left = root.right;
  root.right = temp;

  return root;
};
