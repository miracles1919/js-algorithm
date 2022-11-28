/**
 * 104. 二叉树的最大深度
 */

{
  function maxDepth(root: TreeNode | null): number {
    let res = 0;
    let depth = 0;

    function traverse(root: TreeNode | null) {
      if (!root) return;

      depth++;
      if (!root.left && !root.right) {
        // 叶子节点
        res = Math.max(res, depth);
      }
      traverse(root.left);
      traverse(root.right);
      depth--;
    }

    traverse(root);
    return res;
  }
}

function maxDepth(root: TreeNode | null): number {
  if (!root) return 0;

  const leftMax = maxDepth(root.left);
  const rightMax = maxDepth(root.right);
  const res = Math.max(leftMax, rightMax) + 1;
  return res;
}
