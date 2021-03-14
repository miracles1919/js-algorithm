/**
 * 删除二叉搜索树中的节点
 *
 * 给定一个二叉搜索树的根节点 root 和一个值 key，删除二叉搜索树中的 key 对应的节点，并保证二叉搜索树的性质不变。
 * 返回二叉搜索树（有可能被更新）的根节点的引用。
 *
 * 一般来说，删除节点可分为两个步骤：
 *  1.首先找到需要删除的节点；
 *  2.如果找到了，删除它。
 *
 * 说明： 要求算法时间复杂度为 O(h)，h 为树的高度。
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
 * @param {number} key
 * @return {TreeNode}
 */

var deleteNode = function (root, key) {
  if (root === null) return null;
  if (root.val === key) {
    // 末端 直接删除
    if (root.left === null && root.right === null) {
      return null;
    }

    // 存在一个子节点 让子节点接替自己的位置
    if (root.left === null) return root.right;
    if (root.right === null) return root.left;

    // 存在两个子节点
    // 两种方案：1、让左子树中最大的节点接替自己 2、让右子树最小的节点接替自己

    let minNode = getMin(root.right);
    // 这个赋值并不完美 这里简单实现 应该通过链表交换节点
    root.val = minNode.val;
    root.right = deleteNode(root.right, minNode.val);
  } else if (root.val > key) {
    root.left = deleteNode(root.left, key);
  } else {
    root.right = deleteNode(root.right, key);
  }

  return root;
};

var getMin = function (root) {
  while (root.left !== null) root = root.left;
  return root;
};

var getMax = function (root) {
  while (root.right !== null) root = root.right;
  return root;
};
