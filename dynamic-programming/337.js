/**
 * 打家劫舍 III
 * 在上次打劫完一条街道之后和一圈房屋后，小偷又发现了一个新的可行窃的地区。
 * 这个地区只有一个入口，我们称之为“根”。 除了“根”之外，
 * 每栋房子有且只有一个“父“房子与之相连。
 * 一番侦察之后，聪明的小偷意识到“这个地方的所有房屋的排列类似于一棵二叉树”。
 * 如果两个直接相连的房子在同一天晚上被打劫，房屋将自动报警。。
 * 计算在不触动警报的情况下，小偷一晚能够盗取的最高金额。
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
var rob = function (root) {
  const memo = new Map();

  function dp(root) {
    if (root === null) return 0;

    if (memo.get(root)) return memo.get(root);

    let rob =
      root.val + // 偷
      (root.left === null ? 0 : dp(root.left.left) + dp(root.left.right)) + // 下下家
      (root.right === null ? 0 : dp(root.right.left) + dp(root.right.right)); // 下下家

    let not_rob = dp(root.left) + dp(root.right);

    let res = Math.max(rob, not_rob);

    memo.set(root, res);
    return res;
  }

  return dp(root);
};

var rob = function (root) {
  /*
   * 返回一个大小为2的数组
   * arr[0] 表示 不偷root 得到的最高金额
   * arr[1] 表示 偷root   得到的最高金额
   */

  function dp(root) {
    if (root === null) return [0, 0];
    const left = dp(root.left);
    const right = dp(root.right);
    const rob = root.val + left[0] + right[0]; // 偷 下家不能偷
    const not_rob = Math.max(left[0], left[1]) + Math.max(right[0], right[1]); // 不偷 下家可偷可不偷

    return [not_rob, rob];
  }

  const res = dp(root);
  return Math.max(res[0], res[1]);
};
