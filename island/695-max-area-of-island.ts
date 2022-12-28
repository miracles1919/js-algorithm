/**
 * 岛屿的最大面积
 */

function maxAreaOfIsland(grid: number[][]): number {
  let res = 0;
  const m = grid.length,
    n = grid[0].length;

  const dfs = (grid: number[][], i: number, j: number): number => {
    if (i < 0 || i >= m || j < 0 || j >= n) {
      return 0;
    }

    if (grid[i][j] === 0) return 0;

    grid[i][j] = 0;
    return (
      dfs(grid, i - 1, j) +
      dfs(grid, i + 1, j) +
      dfs(grid, i, j - 1) +
      dfs(grid, i, j + 1) +
      1
    );
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        res = Math.max(dfs(grid, i, j), res);
      }
    }
  }

  return res;
}
