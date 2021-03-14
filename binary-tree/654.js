/**
 * 最大二叉树
 *
 * 给定一个不含重复元素的整数数组 nums 。一个以此数组直接递归构建的 最大二叉树 定义如下：
 * 1. 二叉树的根是数组 nums 中的最大元素。
 * 2. 左子树是通过数组中 最大值左边部分 递归构造出的最大二叉树。
 * 3. 右子树是通过数组中 最大值右边部分 递归构造出的最大二叉树。
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  var build = function (nums) {
    if (!nums.length) return null;

    let max = nums[0],
      index = 0;

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > max) {
        max = nums[i];
        index = i;
      }
    }

    let root = new TreeNode(max);
    root.left = build(nums.slice(0, index));
    root.right = build(nums.slice(index + 1, nums.length));
    return root;
  };

  return build(nums);
};
