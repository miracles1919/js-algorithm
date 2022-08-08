/**
 * N 皇后
 * 按照国际象棋的规则，皇后可以攻击与之处在同一行或同一列或同一斜线上的棋子。
 * n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
 * 给你一个整数 n ，返回所有不同的 n 皇后问题 的解决方案。
 * 每一种解法包含一个不同的 n 皇后问题 的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。
 *
 * @param {number} n
 * @return {string[][]}
 */

var solveNQueens = function (n) {
  const board = new Array(n).fill(0).map(() => new Array(n).fill('.'));
  const res = [];

  // 是否可以在(i,j)位置放皇后
  function isValid(board, row, col) {
    // 上方
    for (let i = 0; i <= row; i++) {
      if (board[i][col] === 'Q') return false;
    }

    // 左上方
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === 'Q') return false;
    }

    // 右上方
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (board[i][j] === 'Q') return false;
    }

    return true;
  }

  function backtrack(board, i) {
    if (i === board.length) {
      res.push(board.map((item) => item.join('')));
      return;
    }

    for (let j = 0; j < n; j++) {
      if (!isValid(board, i, j)) continue;

      board[i][j] = 'Q';
      backtrack(board, i + 1);
      board[i][j] = '.';
    }
  }

  backtrack(board, 0);
  return res;
};

var solveNQueens = function (n) {
  const board = new Array(n).fill(0).map(() => new Array(n).fill('.'));
  const res = [];

  const cols = new Set();
  const diag1 = new Set();
  const diag2 = new Set();

  // 是否可以在(i,j)位置放皇后
  function isValid(row, col) {
    // 上方
    if (cols.has(col)) return false;

    // 左上方
    if (diag1.has(row - col)) return false;

    // 右上方
    if (diag2.has(row + col)) return false;
    return true;
  }

  function backtrack(board, i) {
    if (i === board.length) {
      res.push(board.map((item) => item.join('')));
      return;
    }

    for (let j = 0; j < n; j++) {
      if (!isValid(i, j)) continue;

      board[i][j] = 'Q';
      cols.add(j);
      diag1.add(i - j);
      diag2.add(i + j);
      backtrack(board, i + 1);
      board[i][j] = '.';
      cols.delete(j);
      diag1.delete(i - j);
      diag2.delete(i + j);
    }
  }

  backtrack(board, 0);
  return res;
};

console.log(solveNQueens(4));
