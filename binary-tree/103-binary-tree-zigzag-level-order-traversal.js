/**
 * 二叉树的锯齿形层序遍历
 * 给定一个二叉树，返回其节点值的锯齿形层序遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。
 * 例如：
 *  给定二叉树 [3,9,20,null,null,15,7],
 *
 * 返回锯齿形层序遍历如下：
 *
 * [
 *  [3],
 *  [20,9],
 *  [15,7]
 * ]
 *
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  const res = [];
  function bfs(root, i) {
    if (root === null) return;

    bfs(root.left, i + 1);
    bfs(root.right, i + 1);

    if (res[i] === undefined) {
      res[i] = [];
    }

    if (i % 2 === 0) {
      res[i].push(root.val);
    } else {
      res[i].unshift(root.val);
    }
  }

  bfs(root, 0);
  return res;
};

var zigzagLevelOrder = function (root) {
  const res = [];
  if (!root) return res;

  const queue = [root];
  while (queue.length) {
    const currSize = queue.length;
    res.push([]);
    const isEven = (res.length - 1) % 2 === 0;
    for (let i = 0; i < currSize; i++) {
      const node = queue.shift();

      if (isEven) {
        res[res.length - 1].push(node.val);
      } else {
        res[res.length - 1].unshift(node.val);
      }

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return res;
};
