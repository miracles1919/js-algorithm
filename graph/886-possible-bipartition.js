/**
 * 可能的二分法
 *
 * 给定一组 n 人（编号为 1, 2, ..., n）， 我们想把每个人分进任意大小的两组。每个人都可能不喜欢其他人，那么他们不应该属于同一组。
 * 给定整数 n 和数组 dislikes ，其中 dislikes[i] = [ai, bi] ，表示不允许将编号为 ai 和 bi 的人归入同一组。
 * 当可以用这种方法将所有人分进两组时，返回 true；否则返回 false。
 *
 */

var possibleBipartition = function (n, dislikes) {
  function buildGraph(n, dislikes) {
    const graph = new Array(n + 1).fill(0).map(() => []);
    dislikes.forEach((item) => {
      const [x, y] = item;
      graph[x].push(y);
      graph[y].push(x);
    });
    return graph;
  }

  var isBipartite = function (graph) {
    const n = graph.length;
    const visited = new Array(n);
    const color = new Array(n).fill(false);
    let valid = true;

    function dfs(v, graph) {
      visited[v] = true;

      for (const neighbor of graph[v]) {
        if (visited[neighbor]) {
          if (color[neighbor] === color[v]) {
            valid = false;
            return;
          }
        } else {
          color[neighbor] = !color[v];
          dfs(neighbor, graph);
          if (!valid) return;
        }
      }
    }

    for (let i = 1; i < n; i++) {
      if (!visited[i]) {
        dfs(i, graph);
      }
    }

    return valid;
  };

  const graph = buildGraph(n, dislikes);
  return isBipartite(graph);
};

// var possibleBipartition = function (n, dislikes) {
//   function buildGraph(n, dislikes) {
//     const graph = new Array(n + 1).fill(0).map(() => []);
//     dislikes.forEach((item) => {
//       const [x, y] = item;
//       graph[x].push(y);
//       graph[y].push(x);
//     });
//     return graph;
//   }

//   var isBipartite = function (graph) {
//     const n = graph.length;
//     const visited = new Array(n);
//     const color = new Array(n).fill(false);
//     let valid = true;

//     function bfs(v, graph) {
//       const queue = [v];
//       visited[v] = true;

//       while (queue.length) {
//         const curr = queue.shift();

//         for (const neighbor of graph[curr]) {
//           if (visited[neighbor]) {
//             if (color[neighbor] === color[curr]) {
//               valid = false;
//               return;
//             }
//           } else {
//             visited[neighbor] = true;
//             color[neighbor] = !color[curr];
//             queue.push(neighbor);
//           }
//         }
//       }
//     }

//     for (let i = 1; i < n; i++) {
//       if (!visited[i]) {
//         bfs(i, graph);
//       }
//     }

//     return valid;
//   };

//   const graph = buildGraph(n, dislikes);
//   return isBipartite(graph);
// };

console.log(
  possibleBipartition(3, [
    [1, 2],
    [1, 3],
    [2, 3],
  ])
);
