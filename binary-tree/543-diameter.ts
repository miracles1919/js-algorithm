/**
 * 二叉树的直径
 */

{
  function diameterOfBinaryTree(root: TreeNode | null): number {
    let res = 0;

    function traverse(root: TreeNode | null) {
      if (!root) return;

      const leftMax = maxDepth(root.left);
      const rightMax = maxDepth(root.right);
      res = Math.max(leftMax + rightMax, res);

      traverse(root.left);
      traverse(root.right);
    }

    traverse(root);
    return res;
  }
}

{
  function diameterOfBinaryTree(root: TreeNode | null): number {
    let res = 0;
    function maxDepth(root: TreeNode | null): number {
      if (!root) return 0;

      const leftMax = maxDepth(root.left);
      const rightMax = maxDepth(root.right);
      res = Math.max(leftMax + rightMax, res);
      return 1 + Math.max(leftMax, rightMax);
    }

    maxDepth(root);
    return res;
  }
}
