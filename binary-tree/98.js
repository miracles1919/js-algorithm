/**
 * 验证二叉搜索树
 *
 * 给定一个二叉树，判断其是否是一个有效的二叉搜索树。
 * 假设一个二叉搜索树具有如下特征：
 *  节点的左子树只包含小于当前节点的数。
 *  节点的右子树只包含大于当前节点的数。
 *  所有左子树和右子树自身必须也是二叉搜索树。
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
 * @return {boolean}
 */
var isValidBST = function (root) {
  var isValid = function (root, max, min) {
    if (root === null) return true;
    if (min !== null && root.val <= min.val) return false;
    if (max !== null && root.val >= max.val) return false;

    return isValid(root.left, root, min) && isValid(root.right, max, root);
  };

  return isValid(root, null, null);
};

var isValidBST = function (root) {
  let stack = [];
  let inorder = -Infinity; // 前一个节点值

  // 中序遍历
  while (stack.length || root !== null) {
    while (root !== null) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();

    if (root.val <= inorder) return false;

    inorder = root.val;
    root = root.right;
  }
  return true;

};
