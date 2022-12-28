/**
 * 统计子岛屿
 */

function countSubIslands(grid1: number[][], grid2: number[][]): number {
  const m = grid1.length,
    n = grid1[0].length;

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
    for (let j = 0; j < n; j++) {
      if (grid2[i][j] === 1 && grid1[i][j] === 0) {
        // 不是子岛屿
        dfs(grid2, i, j);
      }
    }
  }

  let res = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid2[i][j] === 1) {
        res++;
        dfs(grid2, i, j);
      }
    }
  }
  return res;
}
