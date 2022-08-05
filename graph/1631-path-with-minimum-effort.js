/**
 * 最小体力消耗路径
 *
 * 你准备参加一场远足活动。
 * 给你一个二维 rows x columns 的地图 heights ，其中 heights[row][col] 表示格子 (row, col) 的高度。
 * 一开始你在最左上角的格子 (0, 0) ，且你希望去最右下角的格子 (rows-1, columns-1) （注意下标从 0 开始编号）。
 * 你每次可以往 上，下，左，右 四个方向之一移动，你想要找到耗费 体力 最小的一条路径。
 *
 * 一条路径耗费的 体力值 是路径上相邻格子之间 高度差绝对值 的 最大值 决定的。
 *
 * 请你返回从左上角走到右下角的最小 体力消耗值 。
 */

/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function (heights) {
  const INF = Number.MAX_SAFE_INTEGER;
  const m = heights.length;
  const n = heights[0].length;

  const dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  // 返回坐标 (x,y) 相邻坐标 - 上下左右
  function adj(matrix, x, y) {
    const m = matrix.length,
      n = matrix[0].length;
    const neighbors = [];
    for (const dir of dirs) {
      const nx = x + dir[0];
      const ny = y + dir[1];
      if (nx >= m || nx < 0 || ny >= n || ny < 0) {
        // 越界
        continue;
      }

      neighbors.push([nx, ny]);
    }
    return neighbors;
  }

  function dijkstra(heights) {
    // effort[i][j] 表示(0,0)到(i,j)的最小体力消耗
    // 体力消耗就是一条路径经过的权重最大值
    const effort = new Array(m).fill(0).map(() => new Array(n).fill(INF));
    effort[0][0] = 0;
    let res = INF;

    const queue = [];
    // [x, y, effort]
    queue.push([0, 0, 0]);

    while (queue.length) {
      const curr = queue.shift();
      const [currX, currY, currEffort] = curr;

      if (currX == m - 1 && currY == n - 1) {
        // 到达终点
        res = Math.min(res, currEffort);
        continue;
      }

      if (currEffort > effort[currX][currY]) {
        continue;
      }

      for (const neighbor of adj(heights, currX, currY)) {
        const [nX, nY] = neighbor;
        const effortToNb = Math.max(
          effort[currX][currY],
          Math.abs(heights[currX][currY] - heights[nX][nY])
        );

        if (effortToNb < effort[nX][nY]) {
          effort[nX][nY] = effortToNb;
          queue.push([nX, nY, effortToNb]);
        }
      }
    }

    return res === INF ? -1 : res;
  }

  const effort = dijkstra(heights);
  return effort;
};

var minimumEffortPath = function (heights) {
  const INF = Number.MAX_SAFE_INTEGER;
  const m = heights.length;
  const n = heights[0].length;
  let res = INF;

  const dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  const dist = new Array(m).fill(0).map(() => new Array(n).fill(INF));
  dist[0][0] = 0;

  const queue = [];
  queue.push([0, 0, 0]);

  while (queue.length) {
    const curr = queue.shift();
    const [x, y, currDist] = curr;

    if (x == m - 1 && y == n - 1) {
      res = Math.min(res, currDist);
      continue;
    }

    for (let i = 0; i < 4; i++) {
      const nx = x + dirs[i][0];
      const ny = y + dirs[i][1];

      if (nx >= m || nx < 0 || ny >= n || ny < 0) {
        continue;
      }

      const distToN = Math.max(
        // currDist,
        dist[x][y],
        Math.abs(heights[x][y] - heights[nx][ny])
      );

      if (distToN < dist[nx][ny]) {
        dist[nx][ny] = distToN;
        queue.push([nx, ny, distToN]);
      }
    }
  }

  return res === INF ? -1 : res;
};

minimumEffortPath([
  [1, 2, 2],
  [3, 8, 2],
  [5, 3, 5],
]);
