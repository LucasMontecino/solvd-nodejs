import { Graph } from '../graph';

describe('Graph', () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
  });

  test('addVertex adds a vertex to the graph', () => {
    graph.addVertex('A');
    expect(graph.adjacencyList).toHaveProperty('A');
    expect(graph.adjacencyList['A']).toEqual([]);
  });

  test('addEdge adds edges between two vertices', () => {
    graph.addEdge('A', 'B');

    expect(graph.adjacencyList['A']).toContain('B');
    expect(graph.adjacencyList['B']).toContain('A');
  });

  test('depthFirstSearch visits nodes in DFS order', () => {
    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    graph.addEdge('B', 'D');
    graph.addEdge('C', 'E');

    const dfsResult = graph.depthFirstSearch('A');
    expect(dfsResult).toEqual(
      expect.arrayContaining(['A', 'B', 'D', 'C', 'E'])
    );
  });

  test('breadthFirstSearch visits nodes in BFS order', () => {
    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    graph.addEdge('B', 'D');
    graph.addEdge('C', 'E');

    const bfsResult = graph.breadthFirstSearch('A');
    expect(bfsResult).toEqual(['A', 'B', 'C', 'D', 'E']);
  });

  test('depthFirstSearch returns empty array if start vertex does not exist', () => {
    expect(graph.depthFirstSearch('X')).toEqual([]);
  });

  test('breadthFirstSearch returns array with start if no neighbors', () => {
    graph.addVertex('Z');
    expect(graph.breadthFirstSearch('Z')).toEqual(['Z']);
  });
});
