const edges = [
  [1, 2],
  [2, 3],
  [1, 5],
  [3, 4],
  [1, 4],
];

function findRedundentPath(edges) {
  let n = edges.length;

  let visited = new Array(n + 1).fill(-1);

  for (let i = 0; i < n; i++) {
    let edge = edges[i];

    if (visited[edge[0]] == -1 && visited[edge[1] == -1]) {
      visited[edge[0]] = edge[0] > edge[1] ? edge[0] : edge[1];
    } else {
      let absLeft = isVisited(edge[0], visited);
      let absRight = isVisited(edge[1], visited);
      if (absLeft == absRight) {
        return edge;
      }
      if (absLeft > absRight) {
        visited[absRight] = absLeft;
      } else {
        visited[absLeft] = absRight;
      }
    }
  }
}

function isVisited(node, visited) {
  let abs = node;
  while (visited[abs] != -1) {
    abs = visited[abs];
  }

  return abs;
}

console.log(findRedundentPath(edges));
