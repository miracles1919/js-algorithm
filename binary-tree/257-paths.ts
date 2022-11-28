/**
 * 二叉树的所有路径
 */

{
  function binaryTreePaths(root: TreeNode | null): string[] {
    if (!root) return [];
    const res: number[][] = [];
    function traverse(root: TreeNode | null, track: number[]) {
      if (!root) return;
      if (!root.left && !root.right) {
        res.push(track.slice());
        return;
      }

      if (root.left) {
        track.push(root.left.val);
        traverse(root.left, track);
        track.pop();
      }

      if (root.right) {
        track.push(root.right.val);
        traverse(root.right, track);
        track.pop();
      }
    }

    traverse(root, [root.val]);
    return res.map((item) => item.join('->'));
  }
}

{
  function binaryTreePaths(root: TreeNode | null): string[] {
    const res: string[] = [];
    function traverse(root: TreeNode | null, path: string) {
      if (!root) return;

      path += root.val;

      if (!root.left && !root.right) {
        res.push(path);
        return;
      }

      path += '->';
      traverse(root.left, path);
      traverse(root.right, path);
    }
    traverse(root, '');
    return res;
  }
}

{
  function binaryTreePaths(root: TreeNode | null): string[] {
    const res: string[] = [];
    if (!root) return [];

    const stack = [root];
    const pathStack = [root.val + ''];

    while (stack.length) {
      const curr = stack.shift()!;
      const path = pathStack.shift()!;

      if (!curr.left && !curr.right) {
        res.push(path);
      }

      if (curr.left) {
        stack.push(curr.left);
        pathStack.push(path + '->' + curr.left.val);
      }

      if (curr.right) {
        stack.push(curr.right);
        pathStack.push(path + '->' + curr.right.val);
      }
    }

    return res;
  }
}
