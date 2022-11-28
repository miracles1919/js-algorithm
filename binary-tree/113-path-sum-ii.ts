/**
 * 路径总和 II
 */

{
  function pathSum(root: TreeNode | null, targetSum: number): number[][] {
    if (!root) return [];
    const res: number[][] = [];

    function traverse(root: TreeNode | null, target: number, track: number[]) {
      if (!root) return;

      if (target === 0 && !root.left && !root.right) {
        res.push(track.slice());
        return;
      }

      if (!root.left && !root.right) return;

      if (root.left) {
        const val = root.left.val;
        track.push(val);
        traverse(root.left, target - val, track);
        track.pop();
      }

      if (root.right) {
        const val = root.right.val;
        track.push(val);
        traverse(root.right, target - val, track);
        track.pop();
      }
    }

    traverse(root, targetSum - root.val, [root.val]);
    return res;
  }
}
