import { Stack } from './stack.js';
import { Queue } from './queue.js';
import { List } from './linkedList.js';
import { BinaryTree } from './binaryTree.js';
import { Graph } from './graph.js';

/* --------------------------------------- */
/*  Stack Implementation                   */
/* --------------------------------------- */

// const myStack = new Stack();
// console.log('first stack call..', myStack.stack);

// myStack.push({ name: 'Lucas', username: 'lucasm9', age: 30 });
// myStack.push({ name: 'Nicolas', username: 'nico19', age: 24 });

// console.log('second stack call..', myStack.stack);

// myStack.pop();

// console.log('third stack call..', myStack.stack);

// myStack.push({ name: 'Martin', username: 'martin5', age: 22 });
// myStack.push({ name: 'Juan', username: 'juan23', age: 23 });

// console.log('testing peek method from stack..', myStack.peek());

/* --------------------------------------- */
/*  Queue List Implementation              */
/* --------------------------------------- */

// const myQueue = new Queue();
// console.log('first queue call..', myQueue.queue);

// myQueue.enqueue({ name: 'Tony', username: 'tony1', age: 37 });
// myQueue.enqueue({ name: 'Gonzalo', username: 'gon7', age: 32 });

// console.log('second queue call..', myQueue.queue);

// myQueue.dequeue();

// console.log('third queue call..', myQueue.queue);

// myQueue.enqueue({ name: 'Rafa', username: 'rafa6', age: 24 });
// myQueue.enqueue({ name: 'Lisa', username: 'lisa12', age: 23 });

// console.log('fourth queue call..', myQueue.queue);

// console.log('testing peek front from queue..', myQueue.peek());

/* --------------------------------------- */
/*  Linked List Implementation             */
/* --------------------------------------- */

// const myList = new List();

// myList.insert(10);
// myList.insert(2);
// myList.insert(4);
// myList.insert(3);

// myList.remove(10);
// console.log(myList.search(4));
// console.log(myList.head);

/* --------------------------------------- */
/*  Binary Tree Implementation             */
/* --------------------------------------- */

// const myBinaryTree = new BinaryTree();
// myBinaryTree.insert(10);
// myBinaryTree.insert(5);
// myBinaryTree.insert(7);
// myBinaryTree.insert(12);

// console.log(myBinaryTree.search(13));
// console.log(myBinaryTree.traverse());

/* --------------------------------------- */
/*  Graph Implementation                   */
/* --------------------------------------- */

const myGraph = new Graph();
myGraph.addVertex('A');
myGraph.addVertex('B');
myGraph.addVertex('C');
myGraph.addVertex('D');

myGraph.addEdge('A', 'B');
myGraph.addEdge('A', 'C');
myGraph.addEdge('B', 'D');

console.log(myGraph);
console.log(myGraph.depthFirstSearch('B'));
console.log(myGraph.breadthFirstSearch('A'));
