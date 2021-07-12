/**
 * 二叉树的层序遍历
 * 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。
 * 例如：
 *  给定二叉树 [3,9,20,null,null,15,7],
 *
 * 返回锯齿形层序遍历如下：
 *
 * [
 *  [3],
 *  [9,20],
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
var levelOrder = function (root) {
  const res = [];
  function bfs(root, i) {
    if (root === null) return;

    bfs(root.left, i + 1);
    bfs(root.right, i + 1);

    if (res[i] === undefined) {
      res[i] = [];
    }

    res[i].push(root.val);
  }

  bfs(root, 0);
  return res;
};

var levelOrder = function (root) {
  const res = [];
  if (!root) return res 

  const queue = [root];
  while(queue.length) {
    const currSize = queue.length
    res.push([])

    for (let i = 0; i < currSize; i++) {
      const node = queue.shift()
      res[res.length - 1].push(node.val)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }

  return res
};
