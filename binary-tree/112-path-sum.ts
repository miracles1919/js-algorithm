/**
 *  路径总和
 */

{
  function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if (!root) return false;

    function traverse(root: TreeNode, target: number): boolean {
      if (target === 0 && !root.left && !root.right) return true;

      // 叶子节点
      if (!root.left && !root.right) return false;

      if (root.left && traverse(root.left, target - root.left.val)) return true;
      if (root.right && traverse(root.right, target - root.right.val))
        return true;

      return false;
    }

    return traverse(root, targetSum - root.val);
  }
}

{
  function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if (!root) return false;
    if (!root.left && !root.right) {
      return root.val === targetSum;
    }
    return (
      hasPathSum(root.left, targetSum - root.val) ||
      hasPathSum(root.right, targetSum - root.val)
    );
  }
}

{
  function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if (!root) return false;
    const stack = [root];
    const sumStack = [root.val];

    while (stack.length) {
      const curr = stack.pop()!;
      const sum = sumStack.pop()!;

      if (!curr.left && !curr.right) {
        if (sum === targetSum) {
          return true;
        }
        continue;
      }

      if (curr.left) {
        stack.push(curr.left);
        sumStack.push(sum + curr.left.val);
      }

      if (curr.right) {
        stack.push(curr.right);
        sumStack.push(sum + curr.right.val);
      }
    }

    return false;
  }
}
