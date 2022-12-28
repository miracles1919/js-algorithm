/**
 * 岛屿数量
 */

function numIslands(grid: string[][]): number {
  let res = 0;
  const m = grid.length,
    n = grid[0].length;

  const dfs = (grid: string[][], i: number, j: number) => {
    if (i < 0 || i >= m || j < 0 || j >= n) {
      return;
    }

    if (grid[i][j] === '0') return;

    grid[i][j] = '0';
    dfs(grid, i - 1, j);
    dfs(grid, i + 1, j);
    dfs(grid, i, j - 1);
    dfs(grid, i, j + 1);
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1') {
        res++;
        // 将相邻岛屿变成海水
        dfs(grid, i, j);
      }
    }
  }

  return res;
}
