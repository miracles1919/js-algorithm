/**
 * 二叉搜索树中的插入操作
 *
 * 给定二叉搜索树（BST）的根节点和要插入树中的值，将值插入二叉搜索树。 返回插入后二叉搜索树的根节点。
 * 输入数据 保证 ，新值和原始二叉搜索树中的任意节点值都不同。
 *
 * 注意，可能存在多种有效的插入方式，只要树在插入后仍保持为二叉搜索树即可。 你可以返回 任意有效的结果 。
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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
  if (root === null) return new TreeNode(val);

  if (root.val > val) {
    root.left = insertIntoBST(root.left, val);
  }

  if (root.val < val) {
    root.right = insertIntoBST(root.right, val);
  }

  return root;
};

var insertIntoBST = function (root, val) {
  if (root === null) return new TreeNode(val);

  let curr = root;

  while (curr !== null) {
    if (curr.val > val) {
      if (curr.left !== null) {
        curr = curr.left;
      } else {
        curr.left = new TreeNode(val);
        break;
      }
    } else {
      if (curr.right !== null) {
        curr = curr.right;
      } else {
        curr.right = new TreeNode(val);
        break;
      }
    }
  }

  return root;
};
