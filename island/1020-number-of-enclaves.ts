/**
 * 飞地的数量
 */

function numEnclaves(grid: number[][]): number {
  let res = 0;
  const m = grid.length,
    n = grid[0].length;

  const dfs = (grid: number[][], i: number, j: number) => {
    if (i < 0 || i >= m || j < 0 || j >= n) {
      return;
    }

    if (grid[i][j] === 0) return;

    grid[i][j] = 0;
    dfs(grid, i - 1, j);
    dfs(grid, i + 1, j);
    dfs(grid, i, j - 1);
    dfs(grid, i, j + 1);
  };

  for (let i = 0; i < m; i++) {
    dfs(grid, i, 0);
    dfs(grid, i, n - 1);
  }

  for (let j = 0; j < n; j++) {
    dfs(grid, 0, j);
    dfs(grid, m - 1, j);
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        res++;
      }
    }
  }

  return res;
}
