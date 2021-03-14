/**
 * 从中序与后序遍历序列构造二叉树
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

var buildTree = function (inorder, postorder) {
  var build = function (iStart, iEnd, pStart, pEnd) {
    if (pStart > pEnd) return null;
    let root = new TreeNode(postorder[pEnd]);
    let index = inorder.indexOf(root.val);
    let leftLen = index - iStart;
    root.left = build(iStart, index - 1, pStart, pStart + leftLen - 1);
    root.right = build(index + 1, iEnd, pStart + leftLen, pEnd - 1);

    return root;
  };

  return build(0, inorder.length - 1, 0, postorder.length - 1);
};
