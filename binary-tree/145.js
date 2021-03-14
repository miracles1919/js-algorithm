/**
 * 二叉树的后序遍历
 * 给你二叉树的根结点 root ，返回它节点值的 后序 遍历。
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
var postorderTraversal = function (root) {
  let result = [];

  var postorder = function (root) {
    if (root === null) return;

    //  后序遍历
    postorder(root.left);
    postorder(root.right);
    result.push(root.val);
  };

  postorder(root);

  return result;
};
