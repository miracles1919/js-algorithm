/**
 * 二叉树的前序遍历
 */

{
  function preorderTraversal(root: TreeNode | null): number[] {
    const res: number[] = [];
    function traverse(root: TreeNode | null) {
      if (!root) return;
      res.push(root.val);
      traverse(root.left);
      traverse(root.right);
    }

    traverse(root);
    return res;
  }
}

{
  function preorderTraversal(root: TreeNode | null): number[] {
    if (!root) return [];
    const res = [];
    const stack = [root];

    while (stack.length) {
      const curr = stack.pop()!;
      res.push(curr.val);

      if (curr.right) {
        stack.push(curr.right);
      }

      if (curr.left) {
        stack.push(curr.left);
      }
    }

    return res;
  }
}
