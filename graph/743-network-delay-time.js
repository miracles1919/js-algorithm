/**
 * 网络延迟时间
 *
 * 有 n 个网络节点，标记为 1 到 n。
 * 给你一个列表 times，表示信号经过 有向 边的传递时间。
 * times[i] = (ui, vi, wi)，其中 ui 是源节点，vi 是目标节点， wi 是一个信号从源节点传递到目标节点的时间
 * 现在，从某个节点 K 发出一个信号。
 * 需要多久才能使所有节点都收到信号？如果不能使所有节点收到信号，返回 -1 。
 *
 */

/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

class State {
  constructor(id, distFromStart) {
    this.id = id;
    this.distFromStart = distFromStart;
  }
}

var networkDelayTime = function (times, n, k) {
  const INF = Number.MAX_SAFE_INTEGER;
  // 构建邻接表
  const graph = new Array(n + 1).fill('').map(() => new Array());
  for (let time of times) {
    const [from, to, weight] = time;
    graph[from].push([to, weight]);
  }

  function dijkstra(start, graph) {
    // dist[i] 表示start到达i的最短路径权重
    const dist = new Array(graph.length).fill(INF);
    dist[start] = 0;

    const queue = [];
    queue.push([start, 0]);

    while (queue.length) {
      const curr = queue.shift();
      const [currId, currDist] = curr;

      if (currDist > dist[currId]) {
        continue;
      }

      for (let neighbor of graph[currId]) {
        const [nid, weight] = neighbor;
        const distToNb = dist[currId] + weight;
        // 判断到达相邻节点的路径是否更短
        if (dist[nid] > distToNb) {
          dist[nid] = distToNb;
          queue.push([id, distToNb]);
        }
      }
    }

    return dist;
  }

  const dist = dijkstra(k, graph);

  let res = 0;
  for (let i = 1; i < dist.length; i++) {
    if (dist[i] === INF) return -1;
    res = Math.max(dist[i], res);
  }
  return res;
};

console.log(
  networkDelayTime(
    [
      [2, 1, 1],
      [2, 3, 1],
      [3, 4, 1],
    ],
    4,
    2
  )
);
