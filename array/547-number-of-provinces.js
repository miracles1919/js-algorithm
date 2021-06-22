/**
 * 省份数量
 * 有 n 个城市，其中一些彼此相连，另一些没有相连。如果城市 a 与城市 b 直接相连，且城市 b 与城市 c 直接相连，那么城市 a 与城市 c 间接相连。
 * 省份 是一组直接或间接相连的城市，组内不含其他没有相连的城市。
 *
 * 给你一个 n x n 的矩阵 isConnected ，
 * 其中 isConnected[i][j] = 1 表示第 i 个城市和第 j 个城市直接相连，
 * 而 isConnected[i][j] = 0 表示二者不直接相连。
 * 返回矩阵中 省份 的数量。
 *
 * @param {number[][]} isConnected
 * @return {number}
 */
// dfs
var findCircleNum = function (isConnected) {
  const visited = new Map();
  const provinces = isConnected.length;
  let res = 0;

  function dfs(i) {
    for (let j = 0; j < provinces; j++) {
      if (isConnected[i][j] === 1 && !visited.has(j)) {
        visited.set(j);
        dfs(j);
      }
    }
  }

  for (let i = 0; i < provinces; i++) {
    if (!visited.has(i)) {
      dfs(i);
      res++;
    }
  }

  return res;
};

// bfs
var findCircleNum = function (isConnected) {
  const visited = new Map();
  const provinces = isConnected.length;
  let res = 0;
  const queue = [];

  for (let i = 0; i < provinces; i++) {
    if (!visited.has(i)) {
      queue.push(i);

      while (queue.length) {
        const j = queue.shift();
        visited.set(j);

        for (let k = 0; k < provinces; k++) {
          if (isConnected[j][k] === 1 && !visited.has(k)) {
            queue.push(k);
          }
        }
      }
      res++;
    }
  }

  return res
};

console.log(
  findCircleNum([
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
);
