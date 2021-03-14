/**
 * 二叉搜索树中的搜索
 *
 * 给定二叉搜索树（BST）的根节点和一个值。 你需要在BST中找到节点值等于给定值的节点。 返回以该节点为根的子树。 如果节点不存在，则返回 NULL。
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
var searchBST = function (root, val) {
  if (root === null) return null;

  if (root.val === val) return root;
  return searchBST(root.left, val) || searchBST(root.right, val);
};

var searchBST = function (root, val) {
  if (root === null) return null;

  if (root.val === val) return root;

  // 二分法思想
  if (root.val > val) {
    return searchBST(root.left, val)
  }

  if (root.val < val) {
    return searchBST(root.right, val)
  }

};


/**
 * BST 遍历框架
 * 
 * function BST (root, target){
 *  if (root.val == target)
 *    // 找到目标，做点什么
 *  if (root.val < target) 
 *    BST(root.right, target);
 *  if (root.val > target)
 *    BST(root.left, target);
 * }
 */