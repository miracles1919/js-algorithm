/**
 * 二叉树的完全性检验
 */

{
  // 层序遍历，如果前面出现了 null，说明不合法
  // 例如，[1, 2, 3, 4, 5, null, 6]，null 在 6 之前，不合法

  function isCompleteTree(root: TreeNode | null): boolean {
    const stack = [root];

    let prev: TreeNode | null = root;
    while (stack.length) {
      const curr = stack.shift()!;

      if (!prev && curr) return false;
      prev = curr;

      if (curr) {
        stack.push(curr.left);
        stack.push(curr.right);
      }
    }

    return true;
  }
}
