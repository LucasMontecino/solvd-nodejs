/**
 * Graph - A data structure consisting of vertices (nodes) and edges (connections)
 *
 * Implementation using adjacency list representation where each vertex
 * maps to an array of its neighbors. Supports both directed and undirected graphs.
 */
export class Graph {
  /**
   * Creates a new Graph instance
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   */
  constructor() {
    this.adjacencyList = {};
  }

  /**
   * Adds a new vertex to the graph
   * @param {string} vertex - The vertex to add
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   */
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  /**
   * Adds an edge between two vertices (undirected graph)
   * @param {string} vertex1 - First vertex
   * @param {string} vertex2 - Second vertex
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   */
  addEdge(vertex1, vertex2) {
    // Create vertices if they don't exist
    if (!this.adjacencyList[vertex1]) this.addVertex(vertex1);
    if (!this.adjacencyList[vertex2]) this.addVertex(vertex2);

    // Add bidirectional edge (undirected graph)
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  /**
   * Performs Depth-First Search (DFS) traversal from a starting vertex
   *
   * Algorithm: Uses recursion to explore as far as possible along each branch
   * before backtracking. Uses a visited set to avoid cycles.
   *
   * @param {string} start - Starting vertex for the traversal
   * @returns {Array} Array of vertices visited in DFS order
   * Time Complexity: O(V + E) where V is vertices and E is edges
   * Space Complexity: O(V) - due to visited set and recursion stack
   */
  depthFirstSearch(start) {
    const result = [];
    const visited = new Set();

    /**
     * Helper function to perform DFS recursively
     * @param {string} vertex - Current vertex being visited
     */
    const dfs = (vertex) => {
      if (!this.adjacencyList[vertex] || visited.has(vertex)) return;

      visited.add(vertex);
      result.push(vertex);

      // Recursively visit all unvisited neighbors
      for (const neighbor of this.adjacencyList[vertex]) {
        dfs(neighbor);
      }
    };

    dfs(start);
    return result;
  }

  /**
   * Performs Breadth-First Search (BFS) traversal from a starting vertex
   *
   * Algorithm: Uses a queue to explore all neighbors at the current depth
   * before moving deeper. Guarantees shortest path in unweighted graphs.
   *
   * @param {string} start - Starting vertex for the traversal
   * @returns {Array} Array of vertices visited in BFS order
   * Time Complexity: O(V + E) where V is vertices and E is edges
   * Space Complexity: O(V) - due to queue and visited set
   */
  breadthFirstSearch(start) {
    const queue = [start];
    const visited = new Set([start]);
    const result = [];

    while (queue.length > 0) {
      const vertex = queue.shift();
      result.push(vertex);

      // Add all unvisited neighbors to the queue
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

/**
 * UnweightedGraph - Extends the base Graph class for unweighted graphs
 *
 * Provides shortest path functionality using BFS algorithm, which guarantees
 * the shortest path in unweighted graphs.
 */
export class UnweightedGraph extends Graph {
  /**
   * Creates a new UnweightedGraph instance
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   */
  constructor() {
    super();
  }

  /**
   * Finds the shortest path between two vertices using BFS
   *
   * Algorithm: Uses BFS with parent tracking to reconstruct the path
   * - BFS guarantees shortest path in unweighted graphs
   * - Maintains a parent map to reconstruct the path
   * - Returns null if no path exists
   *
   * @param {string} start - Starting vertex
   * @param {string} end - Target vertex
   * @returns {Array|null} Array of vertices in the shortest path, or null if no path exists
   * Time Complexity: O(V + E) where V is vertices and E is edges
   * Space Complexity: O(V) - due to queue, visited set, and parent map
   */
  shortestPathBFS(start, end) {
    if (!this.adjacencyList[start] || !this.adjacencyList[end]) return null;

    const queue = [start];
    const visited = new Set([start]);
    const parent = { [start]: null };

    while (queue.length > 0) {
      const vertex = queue.shift();

      // If we reached the target, break and reconstruct path
      if (vertex === end) break;

      // Explore all neighbors
      for (const neighbor of this.adjacencyList[vertex]) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          parent[neighbor] = vertex;
          queue.push(neighbor);
        }
      }
    }

    // Reconstruct the path from end to start
    const path = [];
    let current = end;

    while (current !== null) {
      path.unshift(current);
      current = parent[current];
    }

    // Return path only if it starts from the start vertex
    return path[0] === start ? path : null;
  }
}

/**
 * WeightedGraph - Extends the base Graph class for weighted graphs
 *
 * Provides shortest path functionality using Dijkstra's algorithm for
 * weighted graphs with non-negative edge weights.
 */
export class WeightedGraph extends Graph {
  /**
   * Creates a new WeightedGraph instance
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   */
  constructor() {
    super();
  }

  /**
   * Adds a weighted edge between two vertices
   * @param {string} vertex1 - First vertex
   * @param {string} vertex2 - Second vertex
   * @param {number} weight - Weight of the edge
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   */
  addEdge(vertex1, vertex2, weight) {
    this.addVertex(vertex1);
    this.addVertex(vertex2);

    // Add bidirectional weighted edge
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  /**
   * Finds the shortest path using Dijkstra's algorithm
   *
   * Algorithm: Uses a priority queue to always process the closest unvisited vertex
   * - Maintains distance and previous vertex tracking
   * - Works only with non-negative edge weights
   * - Current implementation uses array-based priority queue (O(V²))
   * - Could be optimized to O((V + E) log V) with a proper priority queue
   *
   * @param {string} start - Starting vertex
   * @param {string} end - Target vertex
   * @returns {Array|null} Array of vertices in the shortest path, or null if no path exists
   * Time Complexity: O(V²) - current implementation with array-based priority queue
   * Space Complexity: O(V) - due to distances, previous, and priority queue
   */
  dijkstra(start, end) {
    const distances = {};
    const previous = {};
    const pq = [];

    // Initialize distances to infinity and previous to null
    for (const vertex in this.adjacencyList) {
      distances[vertex] = Infinity;
      previous[vertex] = null;
    }

    // Set start distance to 0 and add to priority queue
    distances[start] = 0;
    pq.push({ node: start, distance: 0 });

    while (pq.length) {
      // Sort priority queue and get closest vertex
      pq.sort((a, b) => a.distance - b.distance);
      const { node: current } = pq.shift();

      // If we reached the target, break and reconstruct path
      if (current === end) break;

      // Explore all neighbors and update distances
      for (const neighbor of this.adjacencyList[current]) {
        const distance = distances[current] + neighbor.weight;

        // If we found a shorter path, update it
        if (distance < distances[neighbor.node]) {
          distances[neighbor.node] = distance;
          previous[neighbor.node] = current;
          pq.push({ node: neighbor.node, distance });
        }
      }
    }

    // Reconstruct the path from end to start
    const path = [];
    let current = end;

    while (current) {
      path.unshift(current);
      current = previous[current];
    }

    // Return path only if it exists
    return path.length ? path : null;
  }
}
