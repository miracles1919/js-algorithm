/**
 * 二叉树展开为链表
 */

{
  function flatten(root: TreeNode | null): void {
    if (!root) return;

    flatten(root.left);
    flatten(root.right);

    const left = root.left;
    const right = root.right;

    root.left = null;
    root.right = left;

    let head = root;
    while (head.right) {
      head = head.right;
    }

    head.right = right;
  }
}

{
  function flatten(root: TreeNode | null): void {
    const res: TreeNode[] = [];

    function traverse(root: TreeNode | null) {
      if (!root) return;
      res.push(root);
      traverse(root.left);
      traverse(root.right);
    }

    traverse(root);

    for (let i = 1; i < res.length; i++) {
      const prev = res[i - 1];
      const curr = res[i];
      prev.left = null;
      prev.right = curr;
    }
  }
}
