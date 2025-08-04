/**
 * Queue - A First-In-First-Out (FIFO) data structure
 *
 * Implementation using JavaScript array as the underlying data structure.
 * Elements are added at the rear and removed from the front.
 * Note: dequeue() operation has O(n) time complexity due to array shift operation.
 */
export class Queue {
  /**
   * Creates a new Queue instance
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   */
  constructor() {
    this.queue = [];
  }

  /**
   * Adds an item to the rear of the queue
   * @param {*} item - The item to add to the queue
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   */
  enqueue(item) {
    this.queue.push(item);
  }

  /**
   * Removes and returns the front item from the queue
   * @returns {*} The front item from the queue, or undefined if queue is empty
   * Time Complexity: O(n) - due to array shift operation which moves all remaining elements
   * Space Complexity: O(1)
   *
   * Note: For better performance in production, consider using a linked list
   * or circular buffer implementation to achieve O(1) dequeue operations.
   */
  dequeue() {
    return this.queue.shift();
  }

  /**
   * Returns the front item without removing it
   * @returns {*} The front item from the queue, or undefined if queue is empty
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   */
  peek() {
    return this.queue[0];
  }
}
