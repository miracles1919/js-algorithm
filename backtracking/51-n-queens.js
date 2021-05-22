/**
 * n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
 * 给你一个整数 n ，返回所有不同的 n 皇后问题 的解决方案。
 * 每一种解法包含一个不同的 n 皇后问题 的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。
 * 任何两个皇后都不能处于同一条横行、纵行或斜线上。
 *
 * @param {number} n
 * @return {string[][]}
 */

// 遍历枚举出所有可能的选择。
// 依次尝试这些选择：作出一种选择，并往下递归。
// 如果这个选择产生不出正确的解，要撤销这个选择（将当前的 "Q" 恢复为 "."），回到之前的状态，并作出下一个可用的选择。

var solveNQueens = function (n) {

  // 棋盘初始化
  let board = new Array(n)
  for (let i = 0; i < n; i++) {
    board[i] = new Array(n).fill('.')
  }
  const res = []
  backtrack(board, 0)

  // 路径：board 中小于 row 的行都已经成功放置了皇后
  // 选择列表：第 row 行的所有列都是放置皇后的选择
  // 结束条件：row 超过 board 的最后一行
  function backtrack(board, row) {
    if (row === board.length) {
      res.push(board.map(item => item.reduce((a, b) => a + b), ''))
      return;
    }

    // let n = board[row].length;

    for (let col = 0; col < n; col++) {
      if (!isValid(board, row, col)) {
        continue;
      }

      // 做选择
      board[row][col] = 'Q';

      // 进入下一行选择
      backtrack(board, row + 1);

      // 撤销选择
      board[row][col] = '.';
    }
  }

  // 是否可以在 board[row][col] 放置皇后
  function isValid(board, row, col) {

    for (let i = 0; i < row; i++) {
      // 行
      for (let j = 0; j < n; j++) {
        // 列
        if (
          board[i][j] === 'Q' &&
          (j === col || // 同一列
            i + j === row + col || i - j === row - col) // 对角线
        )
          return false;
      }
    }

    return true;
  }

  return res
};

// 回溯算法框架
// function backtrack(...) {
//  for (选择 in 选择列表) 
//    做选择
//    backtrack(...)
//    撤销选择
// }

console.log(solveNQueens(4))