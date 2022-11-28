/**
 * N 叉树的层序遍历
 */

{
  class Node {
    val: number;
    children: Node[];
    constructor(val?: number) {
      this.val = val === undefined ? 0 : val;
      this.children = [];
    }
  }

  function levelOrder(root: Node | null): number[][] {
    if (!root) return [];
    const res: number[][] = [];
    const stack = [root];

    while (stack.length) {
      const size = stack.length;

      res.push([]);
      for (let i = 0; i < size; i++) {
        const curr = stack.shift()!;

        res[res.length - 1].push(curr.val);

        if (curr.children) {
          stack.push(...curr.children);
        }
      }
    }

    return res;
  }
}
