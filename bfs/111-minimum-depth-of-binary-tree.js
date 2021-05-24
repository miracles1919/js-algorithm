/**
 * 给定一个二叉树，找出其最小深度。
 * 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (root === null) return 0;

  let queue = [root];

  let depth = 1;

  while (queue.length) {
    let n = queue.length;
    for (let i = 0; i < n; i++) {
      let cur = queue.shift();

      // 判断是否到达终点
      if (cur.left === null && cur.right === null) {
        return depth;
      }

      // 将cur的相邻节点加入队列
      if (cur.left !== null) {
        queue.push(cur.left);
      }

      if (cur.right !== null) {
        queue.push(cur.right);
      }
    }
    depth++;
  }

  return depth;
};

// dfs
var minDepth = function (root) {
  if (root === null) return 0;
  if (root.left && root.right) {
    return 1 + Math.min(minDepth(root.left), minDepth(root.right));
  } else if (root.left) {
    return 1 + minDepth(root.left);
  } else if (root.right) {
    return 1 + minDepth(root.right);
  } else {
    return 1;
  }
};
