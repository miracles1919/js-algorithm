/**
 * 所有可能的路径
 *
 * 给你一个有 n 个节点的 有向无环图（DAG），请你找出所有从节点 0 到节点 n-1 的路径并输出（不要求按特定顺序）
 * graph[i] 是一个从节点 i 可以访问的所有节点的列表（即从节点 i 到节点 graph[i][j]存在一条有向边）。
 *
 */

/**
 * @param {number[][]} graph
 * @return {number[][]}
 */

var allPathsSourceTarget = function (graph) {
  const res = [];
  const path = [0];
  const n = graph.length;

  function traverse(graph, node) {
    // 到达终点
    if (node === n - 1) {
      res.push(path.slice());
      return;
    }

    // 递归相邻节点
    for (const v of graph[node]) {
      path.push(v);
      traverse(graph, v);
      path.pop();
    }
  }

  traverse(graph, 0);
  return res;
};
