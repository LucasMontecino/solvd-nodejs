/**
 * Node - Represents a single node in a linked list
 *
 * Each node contains data and a reference to the next node in the sequence.
 */
class Node {
  /**
   * Creates a new Node instance
   * @param {*} data - The data to store in the node
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   */
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

/**
 * List - A linear data structure implemented as a singly linked list
 *
 * Each element (node) contains data and a reference to the next node.
 * Provides O(n) time complexity for search and remove operations.
 */
export class List {
  /**
   * Creates a new List instance
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   */
  constructor() {
    this._length = 0;
    this.head = null;
  }

  /**
   * Gets the current length of the linked list
   * @returns {number} The number of nodes in the list
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   */
  get length() {
    return this._length;
  }

  /**
   * Adds a new node at the end of the linked list
   * @param {*} data - The data to insert
   * @returns {Node} The newly created node
   * Time Complexity: O(n) - needs to traverse to the end of the list
   * Space Complexity: O(1)
   */
  insert(data) {
    const node = new Node(data);
    let current = this.head;

    // If list is empty, set the new node as head
    if (!current) {
      this.head = node;
      this._length++;
      return node;
    }

    // Traverse to the end of the list
    while (current.next) {
      current = current.next;
    }

    // Add the new node at the end
    current.next = node;
    this._length++;
    return node;
  }

  /**
   * Returns all elements in the list as an array
   * @returns {Array|string} Array of all data values or error message if list is empty
   * Time Complexity: O(n)
   * Space Complexity: O(n) - due to result array
   */
  getAll() {
    let current = this.head;

    if (!current) {
      return 'the list is empty!';
    }

    const result = [];
    while (current) {
      result.push(current.data);
      current = current.next;
    }
    return result;
  }

  /**
   * Searches for a specific value in the linked list
   * @param {*} data - The data to search for
   * @returns {string} Success or failure message
   * Time Complexity: O(n) - worst case when item is at the end or not found
   * Space Complexity: O(1)
   */
  search(data) {
    let current = this.head;

    if (!current) {
      return 'the list is empty!';
    }

    // Check if head contains the data
    if (current.data === data) {
      return 'item find!';
    }

    // Traverse the list to find the data
    while (current) {
      if (current.data === data) {
        return 'item find!';
      }
      if (!current.next) {
        return 'item not found!';
      }
      current = current.next;
    }
  }

  /**
   * Removes the first occurrence of a specific value from the linked list
   * @param {*} data - The data to remove
   * @returns {string} Success or failure message
   * Time Complexity: O(n) - worst case when item is at the end or not found
   * Space Complexity: O(1)
   */
  remove(data) {
    let current = this.head;

    if (!current) {
      return 'the list is empty!';
    }

    // If head contains the data to remove
    if (current.data === data) {
      this._length--;
      if (current.next) {
        this.head = current.next;
        return 'deleted element!';
      }
      this.head = null;
      return;
    }

    // Traverse the list to find and remove the data
    while (current) {
      if (current.next && current.next.data === data) {
        if (current.next.next) {
          // Skip the node to be deleted
          current.next = current.next.next;
          this._length--;
          return 'deleted element!';
        }
        // Remove the last node
        current.next = null;
        this._length--;
        return 'deleted element!';
      }

      current = current.next;
    }

    return 'item not found!';
  }

  /**
   * Detects if the linked list has a cycle using Floyd's Cycle Detection Algorithm
   *
   * Floyd's Cycle Detection Algorithm (Tortoise and Hare):
   * - Uses two pointers: slow (tortoise) and fast (hare)
   * - Slow pointer moves one step at a time
   * - Fast pointer moves two steps at a time
   * - If they meet, there's a cycle
   * - If fast pointer reaches the end, there's no cycle
   *
   * @returns {boolean} True if cycle exists, false otherwise
   * Time Complexity: O(n) - where n is the number of nodes
   * Space Complexity: O(1) - uses only two pointers regardless of list size
   */
  hasCycle() {
    let slow = this.head;
    let fast = this.head;

    // If list is empty or has only one node, no cycle possible
    if (!slow || !slow.next) {
      return false;
    }

    while (fast && fast.next) {
      slow = slow.next; // Move slow pointer by 1
      fast = fast.next.next; // Move fast pointer by 2

      // If they meet, there's a cycle
      if (slow === fast) {
        return true;
      }
    }

    // If fast pointer reaches the end, there's no cycle
    return false;
  }
}
