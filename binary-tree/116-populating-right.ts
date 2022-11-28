/**
 * 填充每个节点的下一个右侧节点指针
 */

{
  function connect(root: Node | null): Node | null {
    if (!root) return null;

    // 三叉树遍历
    function traverse(n1: Node | null, n2: Node | null) {
      if (n1 === null || n2 === null) return;

      n1.next = n2;
      traverse(n1.left, n1.right);
      traverse(n1.right, n2.left);
      traverse(n2.left, n2.right);
    }

    traverse(root.left, root.right);
    return root;
  }
}

{
  function connect(root: Node | null): Node | null {
    if (!root) return null;
    const stack = [root];

    while (stack.length) {
      const size = stack.length;

      for (let i = 0; i < size; i++) {
        const node = stack.shift()!;

        if (i < size - 1) {
          node.next = stack[0];
        }

        if (node.left) {
          stack.push(node.left);
        }

        if (node.right) {
          stack.push(node.right);
        }
      }
    }
    return root;
  }
}
