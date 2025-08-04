# Data Structures and Algorithms Project

This project implements fundamental data structures and algorithms in JavaScript, including Stack, Queue, Linked List, Binary Tree, and Graph implementations with various algorithms.

## Table of Contents

- [Stack](#stack)
- [MinMaxStack](#minmaxstack)
- [Queue](#queue)
- [Linked List](#linked-list)
- [Binary Tree](#binary-tree)
- [Graph](#graph)
- [Usage Examples](#usage-examples)
- [Installation and Running](#installation-and-running)

## Stack

**Purpose**: A Last-In-First-Out (LIFO) data structure where elements are added and removed from the same end.

**Implementation**: Uses an array as the underlying data structure.

### Methods

- **`push(item)`** - Adds an item to the top of the stack
  - **Time Complexity**: O(1)
  - **Space Complexity**: O(1)

- **`pop()`** - Removes and returns the top item from the stack
  - **Time Complexity**: O(1)
  - **Space Complexity**: O(1)

- **`peek()`** - Returns the top item without removing it
  - **Time Complexity**: O(1)
  - **Space Complexity**: O(1)

### Algorithm Details

The stack uses JavaScript's built-in array methods:
- `push()` for adding elements
- `pop()` for removing elements
- `at(-1)` for peeking at the top element

## MinMaxStack

**Purpose**: An enhanced stack that tracks the minimum and maximum values in constant time.

**Implementation**: Extends the basic Stack class and maintains separate stacks for tracking min and max values.

### Methods

- **`push(item)`** - Adds an item and updates min/max tracking
  - **Time Complexity**: O(1)
  - **Space Complexity**: O(1)

- **`pop()`** - Removes the top item and updates min/max tracking
  - **Time Complexity**: O(1)
  - **Space Complexity**: O(1)

- **`getMin()`** - Returns the minimum value in the stack
  - **Time Complexity**: O(1)
  - **Space Complexity**: O(1)

- **`getMax()`** - Returns the maximum value in the stack
  - **Time Complexity**: O(1)
  - **Space Complexity**: O(1)

### Algorithm Details

The MinMaxStack uses auxiliary stacks to maintain min and max values:
- For each push operation, it compares the new item with the current min/max
- The minStack and maxStack store the minimum and maximum values seen so far
- This allows O(1) access to min/max values at any time

## Queue

**Purpose**: A First-In-First-Out (FIFO) data structure where elements are added at the rear and removed from the front.

**Implementation**: Uses an array as the underlying data structure.

### Methods

- **`enqueue(item)`** - Adds an item to the rear of the queue
  - **Time Complexity**: O(1)
  - **Space Complexity**: O(1)

- **`dequeue()`** - Removes and returns the front item from the queue
  - **Time Complexity**: O(n) - due to array shift operation
  - **Space Complexity**: O(1)

- **`peek()`** - Returns the front item without removing it
  - **Time Complexity**: O(1)
  - **Space Complexity**: O(1)

### Algorithm Details

The queue uses JavaScript's built-in array methods:
- `push()` for adding elements to the rear
- `shift()` for removing elements from the front
- Direct array indexing for peeking

**Note**: The `dequeue()` operation has O(n) time complexity due to the `shift()` operation which needs to move all remaining elements.

## Linked List

**Purpose**: A linear data structure where elements are stored in nodes, and each node points to the next node in the sequence.

**Implementation**: Uses a Node class with data and next pointer, and a List class to manage the linked list.

### Methods

- **`insert(data)`** - Adds a new node at the end of the list
  - **Time Complexity**: O(n) - needs to traverse to the end
  - **Space Complexity**: O(1)

- **`getAll()`** - Returns all elements in the list as an array
  - **Time Complexity**: O(n)
  - **Space Complexity**: O(n)

- **`search(data)`** - Searches for a specific value in the list
  - **Time Complexity**: O(n) - worst case
  - **Space Complexity**: O(1)

- **`remove(data)`** - Removes the first occurrence of a specific value
  - **Time Complexity**: O(n) - worst case
  - **Space Complexity**: O(1)

- **`hasCycle()`** - Detects if the linked list has a cycle using Floyd's Cycle Detection Algorithm
  - **Time Complexity**: O(n)
  - **Space Complexity**: O(1)

### Algorithm Details

**Floyd's Cycle Detection Algorithm (Tortoise and Hare)**:
- Uses two pointers: slow (tortoise) and fast (hare)
- Slow pointer moves one step at a time
- Fast pointer moves two steps at a time
- If they meet, there's a cycle
- If fast pointer reaches the end, there's no cycle

## Binary Tree

**Purpose**: A hierarchical data structure where each node has at most two children, typically called left and right.

**Implementation**: Uses a Node class with value, left, and right pointers, and a BinaryTree class for tree operations.

### Methods

- **`insert(value)`** - Inserts a new value into the binary tree
  - **Time Complexity**: O(log n) - average case for balanced tree, O(n) - worst case for unbalanced tree
  - **Space Complexity**: O(log n) - due to recursion stack

- **`search(value)`** - Searches for a value in the binary tree
  - **Time Complexity**: O(log n) - average case for balanced tree, O(n) - worst case for unbalanced tree
  - **Space Complexity**: O(1)

- **`traverse()`** - Performs in-order traversal of the tree
  - **Time Complexity**: O(n)
  - **Space Complexity**: O(n) - due to result array and recursion stack

- **`static isBST(node, min, max)`** - Checks if a binary tree is a valid Binary Search Tree
  - **Time Complexity**: O(n)
  - **Space Complexity**: O(log n) - due to recursion stack

### Algorithm Details

**In-Order Traversal**: Visits nodes in the order: left subtree, root, right subtree
- Results in sorted output for BSTs

**BST Validation**: Uses recursive approach with min/max bounds
- Each node must be within the valid range for its position
- Left subtree must be less than current node
- Right subtree must be greater than current node

## Graph

**Purpose**: A data structure consisting of vertices (nodes) and edges (connections between nodes).

**Implementation**: Uses an adjacency list representation where each vertex maps to an array of its neighbors.

### Base Graph Class Methods

- **`addVertex(vertex)`** - Adds a new vertex to the graph
  - **Time Complexity**: O(1)
  - **Space Complexity**: O(1)

- **`addEdge(vertex1, vertex2)`** - Adds an edge between two vertices
  - **Time Complexity**: O(1)
  - **Space Complexity**: O(1)

- **`depthFirstSearch(start)`** - Performs DFS traversal from a starting vertex
  - **Time Complexity**: O(V + E) where V is vertices and E is edges
  - **Space Complexity**: O(V) - due to visited set and recursion stack

- **`breadthFirstSearch(start)`** - Performs BFS traversal from a starting vertex
  - **Time Complexity**: O(V + E) where V is vertices and E is edges
  - **Space Complexity**: O(V) - due to queue and visited set

### UnweightedGraph Class

**Purpose**: Extends the base Graph class for unweighted graphs with shortest path functionality.

#### Methods

- **`shortestPathBFS(start, end)`** - Finds the shortest path between two vertices using BFS
  - **Time Complexity**: O(V + E)
  - **Space Complexity**: O(V)

### WeightedGraph Class

**Purpose**: Extends the base Graph class for weighted graphs with Dijkstra's algorithm.

#### Methods

- **`addEdge(vertex1, vertex2, weight)`** - Adds a weighted edge between two vertices
  - **Time Complexity**: O(1)
  - **Space Complexity**: O(1)

- **`dijkstra(start, end)`** - Finds the shortest path using Dijkstra's algorithm
  - **Time Complexity**: O(V²) - current implementation with array-based priority queue
  - **Space Complexity**: O(V)

### Algorithm Details

**Depth-First Search (DFS)**:
- Uses recursion to explore as far as possible along each branch
- Uses a visited set to avoid cycles
- Good for exploring all possibilities

**Breadth-First Search (BFS)**:
- Uses a queue to explore all neighbors at the current depth before moving deeper
- Guarantees shortest path in unweighted graphs
- Good for finding shortest paths

**Dijkstra's Algorithm**:
- Finds shortest path in weighted graphs with non-negative weights
- Uses a priority queue to always process the closest unvisited vertex
- Maintains distance and previous vertex tracking

## Usage Examples

### Stack Usage
```javascript
import { Stack } from './stack.js';

const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.peek()); // 2
console.log(stack.pop());  // 2
```

### MinMaxStack Usage
```javascript
import { MinMaxStack } from './stack.js';

const minMaxStack = new MinMaxStack();
minMaxStack.push(3);
minMaxStack.push(1);
minMaxStack.push(5);
console.log(minMaxStack.getMin()); // 1
console.log(minMaxStack.getMax()); // 5
```

### Queue Usage
```javascript
import { Queue } from './queue.js';

const queue = new Queue();
queue.enqueue('first');
queue.enqueue('second');
console.log(queue.peek());   // 'first'
console.log(queue.dequeue()); // 'first'
```

### Linked List Usage
```javascript
import { List } from './linkedList.js';

const list = new List();
list.insert(1);
list.insert(2);
list.insert(3);
console.log(list.search(2)); // 'item find!'
list.remove(2);
console.log(list.hasCycle()); // false
```

### Binary Tree Usage
```javascript
import { BinaryTree } from './binaryTree.js';

const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
console.log(tree.search(5));  // true
console.log(tree.traverse()); // [5, 10, 15]
console.log(BinaryTree.isBST(tree.root)); // true
```

### Graph Usage
```javascript
import { Graph, UnweightedGraph, WeightedGraph } from './graph.js';

// Basic Graph
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addEdge('A', 'B');
console.log(graph.depthFirstSearch('A')); // ['A', 'B']

// Unweighted Graph with Shortest Path
const unweightedGraph = new UnweightedGraph();
unweightedGraph.addEdge('A', 'B');
unweightedGraph.addEdge('A', 'C');
unweightedGraph.addEdge('B', 'D');
console.log(unweightedGraph.shortestPathBFS('A', 'D')); // ['A', 'B', 'D']

// Weighted Graph with Dijkstra
const weightedGraph = new WeightedGraph();
weightedGraph.addEdge('A', 'B', 4);
weightedGraph.addEdge('A', 'C', 2);
weightedGraph.addEdge('C', 'D', 1);
console.log(weightedGraph.dijkstra('A', 'D')); // ['A', 'C', 'D']
```

## Installation and Running

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the main file**:
   ```bash
   npm start
   ```

3. **Run in development mode with auto-restart**:
   ```bash
   npm run dev
   ```

4. **Run tests**:
   ```bash
   npm test
   ```

## Project Structure

```
homework-9/
├── index.js           # Main file with usage examples
├── stack.js           # Stack and MinMaxStack implementations
├── queue.js           # Queue implementation
├── linkedList.js      # Linked List implementation
├── binaryTree.js      # Binary Tree implementation
├── graph.js           # Graph implementations (Base, Unweighted, Weighted)
├── package.json       # Project configuration
└── test/              # Test files
    ├── binaryTree.test.js
    ├── graph.test.js
    ├── linkedList.test.js
    ├── queue.test.js
    └── stack.test.js
```

## Key Features

- **Modular Design**: Each data structure is implemented in its own file
- **ES6 Modules**: Uses modern JavaScript import/export syntax
- **Comprehensive Testing**: Includes Jest test suite for all data structures
- **Algorithm Implementations**: Includes advanced algorithms like Floyd's Cycle Detection and Dijkstra's Algorithm
- **Performance Optimized**: All implementations focus on optimal time and space complexity
- **Extensible**: Easy to extend with additional methods and algorithms

## Performance Considerations

- **Stack and Queue**: O(1) for most operations, except Queue.dequeue() which is O(n)
- **Linked List**: O(n) for search and remove operations
- **Binary Tree**: O(log n) average case for balanced trees, O(n) worst case for unbalanced trees
- **Graph**: O(V + E) for traversal algorithms, where V is vertices and E is edges
- **Dijkstra's Algorithm**: O(V²) with current implementation, could be optimized to O((V + E) log V) with a proper priority queue

This project demonstrates fundamental computer science concepts and provides a solid foundation for understanding data structures and algorithms. 