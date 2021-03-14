/**
 * 二叉树的前序遍历
 * 给你二叉树的根结点 root ，返回它节点值的 前序 遍历。
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
var preorderTraversal = function (root) {
  let result = [];

  var preorder = function (root) {
    if (root === null) return;

    // 前序遍历
    result.push(root.val);

    preorder(root.left);
    preorder(root.right);
  };

  preorder(root);

  return result;
};

var preorderTraversal = function (root) {
  if (root.val === null) return;

  let result = [];
  let stack = [root];
  while (stack.length) {
    let curr = stack.pop();
    result.push(curr.val);

    // 先访问左子树 所以右子树先入栈
    if (curr.right !== null) {
      stack.push(curr.right);
    }

    if (curr.left !== null) {
      stack.push(curr.left);
    }
  }

  return result;
};
