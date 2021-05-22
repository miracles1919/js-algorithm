/**
 * 解数独
 * 编写一个程序，通过填充空格来解决数独问题。
 * 数独的解法需 遵循如下规则：
 *  数字 1-9 在每一行只能出现一次。
 *  数字 1-9 在每一列只能出现一次。
 *  数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。（请参考示例图）
 * 数独部分空格内已填入了数字，空白格用 '.' 表示。
 *
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  function backtrack(board, row, col) {
    const m = (n = 9);

    if (col === n) {
      // 穷举到最后一列时换行
      return backtrack(board, row + 1, 0);
    }

    if (row === m) {
      // base case
      return true;
    }

    for (let i = row; i < m; i++) {
      for (let j = col; j < n; j++) {
        if (board[i][j] !== '.') {
          // 已填入的数字
          return backtrack(board, i, j + 1);
        }

        for (let num = 1; num <= 9; num++) {
          if (!isValid(board, i, j, num)) {
            continue;
          }

          board[i][j] = `${num}`;
          if (backtrack(board, i, j + 1)) {
            // 找到一个可行解，立即结束
            return true;
          }
          board[i][j] = '.';
        }
        // 穷举完 1-9 依然没有可行解
        return false;
      }
    }

    return false;
  }

  function isValid(board, row, col, num) {
    for (let i = 0; i < 9; i++) {
      // 一行是否有重复
      if (board[row][i] == num) return false;

      // 一列是否有重复
      if (board[i][col] == num) return false;

      // 3*3是否有重复
      if (
        board[Math.floor(row / 3) * 3 + Math.floor(i / 3)][
          Math.floor(col / 3) * 3 + (i % 3)
        ] == num
      )
        return false;
    }

    return true;
  }

  backtrack(board, 0, 0);
  console.log(board);
  return board;
};

var solveSudoku = function (board) {
  function backtrack(board, row, col) {
    const m = n = 9;

    if (col === 9) {
      // 换行
      row++
      col = 0

      if (row === m) {
        // base case
        return true;
      }
    }

    if (board[row][col] !== '.') {
      // 已填入的数字
      return backtrack(board, row, col + 1);
    }

    for (let num = 1; num <= 9; num++) {
      if (!isValid(board, row, col, num))  continue
      
      board[row][col] = `${num}`; // 做选择
      if (backtrack(board, row, col + 1)) return true // 判断基于当前board 能否解出数独
      board[row][col] = '.' // 撤销选择
    }

    return false;
  }

  function isValid(board, row, col, num) {
    for (let i = 0; i < 9; i++) {
      // 一行是否有重复
      if (board[row][i] == num) return false;

      // 一列是否有重复
      if (board[i][col] == num) return false;

      // 3*3是否有重复
      if (
        board[Math.floor(row / 3) * 3 + Math.floor(i / 3)][
          Math.floor(col / 3) * 3 + (i % 3)
        ] == num
      )
        return false;
    }

    return true;
  }

  backtrack(board, 0, 0);
  console.log(board);
  return board;
};


solveSudoku([
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
]);
