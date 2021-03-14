/**
 * 从前序与中序遍历序列构造二叉树
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (!preorder.length) return null;

  let root = new TreeNode(preorder[0]);

  let index = 0;
  for (let i = 0; i < inorder.length; i++) {
    if (inorder[i] === root.val) {
      index = i;
      break;
    }
  }

  let leftLen = inorder.slice(0, index).length;

  root.left = buildTree(
    preorder.slice(1, leftLen + 1),
    inorder.slice(0, index)
  );

  root.right = buildTree(preorder.slice(leftLen + 1), inorder.slice(index + 1));

  return root;
};

var buildTree = function (preorder, inorder) {
  
  var build = function (pStart, pEnd, iStart, iEnd) {
    if (pStart > pEnd) return null;
    let root = new TreeNode(preorder[pStart]);
    let index = inorder.indexOf(root.val);
    let leftLen = index - iStart;
    root.left = build(pStart + 1, pStart + leftLen, iStart, index - 1);
    root.right = build(pStart + leftLen + 1, pEnd, index + 1, iEnd);

    return root;
  };

  return build(0, preorder.length - 1, 0, inorder.length - 1);
};
