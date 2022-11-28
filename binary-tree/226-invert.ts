/**
 * 翻转二叉树
 */
{
  function invertTree(root: TreeNode | null): TreeNode | null {
    function traverse(root: TreeNode | null) {
      if (!root) return;
      const temp = root.left;
      root.left = root.right;
      root.right = temp;

      traverse(root.left);
      traverse(root.right);
    }

    traverse(root);
    return root;
  }
}

{
  function invertTree(root: TreeNode | null): TreeNode | null {
    if (!root) return root;

    const left = invertTree(root.left);
    const right = invertTree(root.right);

    root.left = right;
    root.right = left;
    return root;
  }
}
