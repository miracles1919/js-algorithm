/**
 * 填充每个节点的下一个右侧节点指针
 *
 * 给定一个 完美二叉树 ，其所有叶子节点都在同一层，每个父节点都有两个子节点。二叉树定义如下：
 * struct Node {
 *  int val;
 *  Node *left;
 *  Node *right;
 *  Node *next;
 * }
 * 填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL。
 * 初始状态下，所有 next 指针都被设置为 NULL。
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
 * @param {Node} node1
 * @param {Node} node2
 */
var connectTwoNode = function (node1, node2) {
  if (node1 === null || node2 === null) return null;

  // 前序遍历
  node1.next = node2;

  connectTwoNode(node1.left, node1.right);
  connectTwoNode(node1.right, node2.left);
  connectTwoNode(node2.left, node2.right);
};

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (root === null) return null;

  connectTwoNode(root.left, root.right);

  return root;
};

// 层次遍历
var connect = function (root) {
  if (root === null) return null;

  const Queue = [root];

  while (Queue.length > 0) {
    let size = Queue.length;

    for (let i = 0; i < size; i++) {
      // 从队首取出元素
      let node = Queue.shift();

      if (i < size - 1) {
        node.next = Queue[0];
      }

      if (node.left !== null) {
        Queue.push(node.left);
      }

      if (node.right !== null) {
        Queue.push(node.right);
      }
    }
  }

  return root;
};
