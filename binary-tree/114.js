/**
 * 给你二叉树的根结点 root ，请你将它展开为一个单链表：
 *
 *  展开后的单链表应该同样使用 TreeNode ，其中 right 子指针指向链表中下一个结点，而左子指针始终为 null 。
 *  展开后的单链表应该与二叉树 先序遍历 顺序相同。
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  if (root === null) return;

  flatten(root.left);
  flatten(root.right);

  // 后序遍历

  // 1.左右子树已经拉平成一条链表
  let left = root.left;
  let right = root.right;

  // 2.将左子树作为右子树
  root.left = null;
  root.right = left;

  // 3.将原先的右子树接到当前右子树的末端
  let node = root;
  while (node.right !== null) {
    node = node.right;
  }
  node.right = right;
};

var flatten = function (root) {
  if (root === null) return;

  let result = [];
  var preorderTraversal = function (root) {
    if (root === null) return;

    // 前序遍历
    result.push(root);

    preorderTraversal(root.left);
    preorderTraversal(root.right);
  };
  preorderTraversal(root);

  for (let i = 1; i < result.length; i++) {
    let prev = result[i - 1],
      curr = result[i];

    prev.left = null;
    prev.right = curr;
  }
};
