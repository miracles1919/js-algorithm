/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

// 时间复杂度O（n） 空间复杂度O（n）
var lowestCommonAncestor = function (root, p, q) {
  let res = null;

  // 包含node节点的子树中是否包含p q
  function dfs(node, p, q) {
    if (node === null) return false;

    const left = dfs(node.left, p, q);
    const right = dfs(node.right, p, q);

    if (
      (left && right) ||
      ((left || right) && (node.val == p.val || node.val == q.val))
    ) {
      res = node;
    }

    return left || right || node.val == p.val || node.val == q.val;
  }

  dfs(root, p, q);
  return res;
};

// 时间复杂度O（n） 空间复杂度O（n）
var lowestCommonAncestor = function (root, p, q) {
  const parent = {};
  const visited = new Set();

  // 记录每个节点的父指针节点
  function dfs(node) {
    if (node.left !== null) {
      parent[node.left.val] = node;
      dfs(node.left);
    }

    if (node.right !== null) {
      parent[node.right.val] = node;
      dfs(node.right);
    }
  }

  dfs(root);

  while (p) {
    visited.add(p.val);
    p = parent[p.val];
  }

  while (q) {
    if (visited.has(q.val)) {
      return q;
    }
    q = parent[q.val];
  }

  return null;
};

var lowestCommonAncestor = function (root, p, q) {

  // 前序遍历
  if (root === null || root.val == p.val || root.val == q.val) return root

  const left = lowestCommonAncestor(root.left, p, q)
  const right = lowestCommonAncestor(root.right, p, q)

  // root 左右子树都不包含p q
  if (left === null && right === null) return null

  // root 左子树不包含p q
  //  1. p q 都在右子树中, right 表示lca
  //  2. p q 有一个在右子树中, right 表示在右子树中的节点
  else if (left === null && right !== null) return right

  // 同理
  else if (left !== null && right === null) return left

  // lca
  else if (left && right) return root


}