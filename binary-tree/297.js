/**
 * 二叉树的序列化与反序列化
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
const SEP = ",";
const NULL = "null";

var serialize = function (root) {
  let result = "";

  var preorder = function (root) {
    if (root === null) {
      result += `${NULL}${SEP}`;
      return;
    }

    // 前序遍历
    result += `${root.val}${SEP}`;

    preorder(root.left);
    preorder(root.right);
  };

  preorder(root);

  return result;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  let result = data.split(SEP);

  var build = function (list) {
    if (!list.length) return null;

    // 从前往后去除元素
    let val = list.shift();
    if (val === NULL) return null;

    const root = new TreeNode(val);

    root.left = build(list);
    root.right = build(list);
    return root;
  };

  return build(result);
};

var serialize = function (root) {
  let result = "";

  var postorder = function (root) {
    if (root === null) {
      result += `${NULL}${SEP}`;
      return;
    }

    //  后序遍历
    postorder(root.left);
    postorder(root.right);
    result += `${root.val}${SEP}`;
  };

  postorder(root);

  return result;
};

var deserialize = function (data) {
  let result = data.split(SEP);
  result.pop();

  var build = function (list) {
    if (!list.length) return null;

    // 从后往前去除元素
    let val = list.pop();
    if (val === NULL) return null;

    const root = new TreeNode(val);

    root.right = build(list);
    root.left = build(list);
    return root;
  };

  return build(result);
};

// 层级遍历
var serialize = function (root) {
  if (root.val === null) return;

  let result = "";
  let stack = [root];
  while (stack.length) {
    let curr = stack.pop();

    if (curr === null) {
      result += `${NULL}${SEP}`;
      continue;
    }

    result += `${curr.val}${SEP}`;

    stack.push(curr.right);
    stack.push(curr.left);
  }

  return result;
};

var deserialize = function (data) {
  if (!data.length) return null;
  let result = data.split(SEP);
  result.pop();
  const root = new TreeNode(result[0]);
  let stack = [root];

  for (let i = 1; i < result.length - 1; ) {
    let parent = stack.shift();

    let left = result[i++];

    if (left !== NULL) {
      parent.left = new TreeNode(left);
      stack.push(parent.left);
    } else {
      parent.left = null;
    }

    let right = result[i++];
    if (right !== NULL) {
      parent.right = new TreeNode(right);
      stack.push(parent.right);
    } else {
      parent.right = null;
    }
  }

  return root;
};
