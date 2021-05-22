/**
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 *
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let res = [];

  // left 表示左括号可用数 right 表示右括号可用数
  function backtrack(left, right, track) {
    if (left < 0 || right < 0) return;

    if (left > right) return;

    if (left === 0 && right === 0) {
      res.push(track.join(''));
      return;
    }

    track.push('(');
    backtrack(left - 1, right, track);
    track.pop();

    track.push(')');
    backtrack(left, right - 1, track);
    track.pop();
  }

  backtrack(n, n, []);
  return res;
};

var generateParenthesis = function (n) {
  let res = [];

  // left 表示当前左括号数量
  let dfs = (left, right, str) => {
    if (left == n && right == n) {
      res.push(str)
      return
    }

    if (left < n) {
      dfs(left + 1, right, str + '(')
    }

    if (right < left) {
      dfs(left, right + 1, str + ')')
    }

  };

  dfs(0, 0, '');

  return res;
};

generateParenthesis(3);
