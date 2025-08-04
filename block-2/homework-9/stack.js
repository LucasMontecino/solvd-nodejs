/**
 * Stack - A Last-In-First-Out (LIFO) data structure
 *
 * Implementation using JavaScript array as the underlying data structure.
 * Provides O(1) time complexity for push, pop, and peek operations.
 */
export class Stack {
  /**
   * Creates a new Stack instance
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   */
  constructor() {
    this.stack = [];
  }

  /**
   * Adds an item to the top of the stack
   * @param {*} item - The item to add to the stack
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   */
  push(item) {
    this.stack.push(item);
  }

  /**
   * Removes and returns the top item from the stack
   * @returns {*} The top item from the stack, or undefined if stack is empty
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   */
  pop() {
    return this.stack.pop();
  }

  /**
   * Returns the top item without removing it
   * @returns {*} The top item from the stack, or undefined if stack is empty
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   */
  peek() {
    return this.stack.at(-1);
  }
}

/**
 * MinMaxStack - An enhanced stack that tracks minimum and maximum values
 *
 * Extends the basic Stack class and maintains separate stacks for tracking
 * min and max values, allowing O(1) access to minimum and maximum values.
 */
export class MinMaxStack extends Stack {
  /**
   * Creates a new MinMaxStack instance
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   */
  constructor() {
    super();
    // Auxiliary stacks to track minimum and maximum values
    this.minStack = [];
    this.maxStack = [];
  }

  /**
   * Adds an item to the stack and updates min/max tracking
   * @param {*} item - The item to add to the stack
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   */
  push(item) {
    // Add item to the main stack
    this.stack.push(item);

    // Update minimum tracking
    const min =
      this.minStack.length === 0 ? item : Math.min(item, this.minStack.at(-1));
    this.minStack.push(min);

    // Update maximum tracking
    const max =
      this.maxStack.length === 0 ? item : Math.max(item, this.maxStack.at(-1));
    this.maxStack.push(max);
  }

  /**
   * Removes the top item from the stack and updates min/max tracking
   * @returns {*} The top item from the stack, or undefined if stack is empty
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   */
  pop() {
    // Remove from auxiliary stacks
    this.minStack.pop();
    this.maxStack.pop();
    // Remove from main stack
    return this.stack.pop();
  }

  /**
   * Returns the minimum value currently in the stack
   * @returns {*} The minimum value, or undefined if stack is empty
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   */
  getMin() {
    return this.minStack.at(-1);
  }

  /**
   * Returns the maximum value currently in the stack
   * @returns {*} The maximum value, or undefined if stack is empty
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   */
  getMax() {
    return this.maxStack.at(-1);
  }
}
