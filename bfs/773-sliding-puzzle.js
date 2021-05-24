/**
 * 滑动谜题
 * 在一个 2 x 3 的板上（board）有 5 块砖瓦，用数字 1~5 来表示, 以及一块空缺用 0 来表示.
 * 一次移动定义为选择 0 与一个相邻的数字（上下左右）进行交换.
 * 最终当板 board 的结果是 [[1,2,3],[4,5,0]] 谜板被解开。
 * 给出一个谜板的初始状态，返回最少可以通过多少次移动解开谜板，如果不能解开谜板，则返回 -1 。
 *
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function (board) {
  const m = 2,
    n = 3;
  let start = '';
  let target = '123450';

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      start += `${board[i][j]}`;
    }
  }

  // 记录一维数组的相邻索引
  // neighbor[i] 表示 在一维字符串中，索引i在二维数组中的的相邻索引
  const neighbor = ['1,3', '0,4,2', '1,5', '0,4', '3,1,5', '4,2'];

  // bfs

  let queue = [start];
  const visited = new Set();
  visited.add(start);
  let step = 0;

  while (queue.length) {
    let size = queue.length
    for (let i = 0; i < size; i++) {
      let cur = queue.shift();

      if (cur == target) {
        return step;
      }

      // 找到数字 0 的索引
      let idx = 0;
      while (cur[idx] != '0') {
        idx++;
      }

      let arr = neighbor[idx].split(',');

      for (let adj of arr) {
        let newBoard = [...cur];
        let temp = newBoard[adj];
        newBoard[adj] = newBoard[idx];
        newBoard[idx] = temp;
        let str = newBoard.join('');

        if (!visited.has(str)) {
          queue.push(str);
          visited.add(str);
        }
      }

    }

    step++;

    
  }

  return -1;
};

console.log(
  slidingPuzzle([
    [1, 2, 3],
    [4, 0, 5],
  ])
);
console.log(
  slidingPuzzle([
    [4,1,2],[5,0,3]
  ])
);
