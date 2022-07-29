/**
 * 判断二分图
 *
 * 存在一个 无向图 ，图中有 n 个节点。其中每个节点都有一个介于 0 到 n - 1 之间的唯一编号。
 * 给你一个二维数组 graph ，其中 graph[u] 是一个节点数组，由节点 u 的邻接节点组成。
 * 形式上，对于 graph[u] 中的每个 v ，都存在一条位于节点 u 和节点 v 之间的无向边。该无向图同时具有以下属性：
 *   - 不存在自环（graph[u] 不包含 u）
 *   - 不存在平行边（graph[u] 不包含重复值）
 *   - 如果 v 在 graph[u] 内，那么 u 也应该在 graph[v] 内（该图是无向图）
 *   - 这个图可能不是连通图，也就是说两个节点 u 和 v 之间可能不存在一条连通彼此的路径
 *
 */

/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function (graph) {
  const n = graph.length;
  const color = new Array(n).fill(false);
  const visited = new Array(n);
  let valid = true;

  // 遍历每个节点
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(graph, i);
    }
  }

  function dfs(graph, v) {
    visited[v] = true;
    for (const neighbor of graph[v]) {
      // 相邻节点未访问，给节点相邻节点和节点v设置不同的颜色
      if (!visited[neighbor]) {
        color[neighbor] = !color[v];
        dfs(graph, neighbor);
        if (!valid) return;
      } else {
        // 相邻节点未已经访问，判断相邻节点和节点v的颜色
        if (color[neighbor] === color[v]) {
          valid = false;
          return;
        }
      }
    }
  }

  return valid;
};

var isBipartite = function (graph) {
  const n = graph.length;
  const color = new Array(n).fill(false);
  const visited = new Array(n);
  let valid = true;

  // 遍历每个节点
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      bfs(graph, i);
    }
  }

  function bfs(graph, v) {
    const queue = [v];

    visited[v] = true;
    while (queue.length) {
      const curr = queue.shift();

      for (const neighbor of graph[curr]) {
        if (!visited[neighbor]) {
          color[neighbor] = !color[curr];
          visited[neighbor] = true;
          queue.push(neighbor);
        } else {
          if (color[neighbor] === color[curr]) {
            valid = false;
            return;
          }
        }
      }
    }
  }

  return valid;
};

isBipartite([
  [1, 3],
  [0, 2],
  [1, 3],
  [0, 2],
]);
