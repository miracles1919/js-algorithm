/**
 * 概率最大的路径
 *
 * 给你一个由 n 个节点（下标从 0 开始）组成的无向加权图，该图由一个描述边的列表组成，
 * 其中 edges[i] = [a, b] 表示连接节点 a 和 b 的一条无向边，且该边遍历成功的概率为 succProb[i] 。
 *
 * 指定两个节点分别作为起点 start 和终点 end ，请你找出从起点到终点成功概率最大的路径，并返回其成功概率。
 *
 * 如果不存在从 start 到 end 的路径，请 返回 0 。只要答案与标准答案的误差不超过 1e-5 ，就会被视作正确答案。
 *
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start
 * @param {number} end
 * @return {number}
 */
var maxProbability = function (n, edges, succProb, start, end) {
  const graph = new Array(n).fill(0).map(() => new Array());
  for (let i = 0; i < edges.length; i++) {
    const [from, to] = edges[i];
    const weight = succProb[i];
    // 无向图可以认为是双向图
    graph[from].push([to, weight]);
    graph[to].push([from, weight]);
  }

  let res = 0;
  // dist[i]表示start到i的最大概率
  const dist = new Array(n).fill(-1);
  dist[start] = 1;

  const queue = [];
  queue.push([start, 1]);

  while (queue.length) {
    const curr = queue.shift();
    const [id, currDist] = curr;

    if (id === end) {
      res = Math.max(res, currDist);
      continue;
    }

    if (currDist < dist[id]) {
      continue;
    }

    for (const neighbor of graph[id]) {
      const [nid, nweight] = neighbor;
      const distToN = dist[id] * nweight;
      if (distToN > dist[nid]) {
        dist[nid] = distToN;
        queue.push([nid, distToN]);
        queue.sort((a, b) => b[1] - a[1]);
      }
    }
  }

  return res;
};

console.log(
  maxProbability(
    5,
    [
      [1, 4],
      [2, 4],
      [0, 4],
      [0, 3],
      [0, 2],
      [2, 3],
    ],
    [0.37, 0.17, 0.93, 0.23, 0.39, 0.04],
    3,
    4
  )
);
