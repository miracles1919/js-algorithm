/**
 * 不同岛屿的数量
 */

function numDistinctIslands(grid: number[][]): number {
  const m = grid.length,
    n = grid[0].length;

  const dfs = (
    grid: number[][],
    i: number,
    j: number,
    track: string[],
    dir: number
  ) => {
    if (i < 0 || i >= m || j < 0 || j >= n) {
      return;
    }

    if (grid[i][j] === 0) return;

    grid[i][j] = 0;
    track.push('' + dir + ',');
    dfs(grid, i - 1, j, track, 1); // 上
    dfs(grid, i + 1, j, track, 2); // 下
    dfs(grid, i, j - 1, track, 3); // 左
    dfs(grid, i, j + 1, track, 4); // 右
    track.push('' + -dir + ',');
  };

  const set = new Set();
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        const res: string[] = [];
        dfs(grid, i, j, res, 0);
        set.add(res.toString());
      }
    }
  }

  return set.size;
}
