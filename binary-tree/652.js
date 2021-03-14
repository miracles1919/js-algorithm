/**
 * 寻找重复的子树
 *
 * 给定一棵二叉树，返回所有重复的子树。对于同一类的重复子树，你只需要返回其中任意一棵的根结点即可。
 * 两棵树重复是指它们具有相同的结构以及相同的结点值。
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
 * @return {TreeNode[]}
 */

var findDuplicateSubtrees = function (root) {
  const SEP = ",";
  const NULL = "#";

  let trees = [],
    map = new Map();

  var serialize = function (root) {
    // 序列化

    if (root === null) return NULL;

    let left = serialize(root.left);
    let right = serialize(root.right);

    let subTree = `${left}${SEP}${right}${SEP}${root.val}`;

    let num = map.get(subTree) || 0; // 记录重复次数

    if (num === 1) {
      // 将重复1次的子树 加入结果列表
      trees.push(root);
    }

    map.set(subTree, num + 1);

    return subTree;
  };

  serialize(root);

  return trees;
};
