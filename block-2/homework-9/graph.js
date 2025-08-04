export class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) this.addVertex(vertex1);
    if (!this.adjacencyList[vertex2]) this.addVertex(vertex2);

    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  depthFirstSearch(start) {
    const result = [];
    const visited = new Set();

    const dfs = (vertex) => {
      if (!this.adjacencyList[vertex] || visited.has(vertex)) return;

      visited.add(vertex);
      result.push(vertex);

      for (const neighbor of this.adjacencyList[vertex]) {
        dfs(neighbor);
      }
    };

    dfs(start);
    return result;
  }

  breadthFirstSearch(start) {
    const queue = [start];
    const visited = new Set([start]);
    const result = [];

    while (queue.length > 0) {
      const vertex = queue.shift();
      result.push(vertex);

      for (const neighbor of this.adjacencyList[vertex]) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
    return result;
  }
}
