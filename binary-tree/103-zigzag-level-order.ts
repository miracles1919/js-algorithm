/**
 * 二叉树的锯齿形层序遍历
 */

{
  function zigzagLevelOrder(root: TreeNode | null): number[][] {
    if (!root) return [];
    const res: number[][] = [];

    const stack = [root];
    let depth = 0;
    while (stack.length) {
      const size = stack.length;

      res[depth] = [];
      const isEven = depth % 2 === 0;
      for (let i = 0; i < size; i++) {
        const curr = stack.shift()!;

        if (isEven) {
          res[depth].push(curr.val);
        } else {
          res[depth].unshift(curr.val);
        }

        if (curr.left) {
          stack.push(curr.left);
        }

        if (curr.right) {
          stack.push(curr.right);
        }
      }

      depth++;
    }

    return res;
  }
}

{
  function zigzagLevelOrder(root: TreeNode | null): number[][] {
    const res: number[][] = [];
    function traverse(root: TreeNode | null, depth: number) {
      if (!root) return;

      traverse(root.left, depth + 1);
      traverse(root.right, depth + 1);

      if (!res[depth]) res[depth] = [];

      if (depth % 2 === 0) {
        res[depth].push(root.val);
      } else {
        res[depth].unshift(root.val);
      }
    }
    traverse(root, 0);
    return res;
  }
}
