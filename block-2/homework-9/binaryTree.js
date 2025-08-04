/**
 * Node - Represents a single node in a binary tree
 *
 * Each node contains a value and references to left and right child nodes.
 */
class Node {
  /**
   * Creates a new Node instance
   * @param {*} value - The value to store in the node
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   */
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/**
 * BinaryTree - A hierarchical data structure where each node has at most two children
 *
 * Implementation of a binary search tree (BST) where:
 * - Left subtree contains values less than the current node
 * - Right subtree contains values greater than the current node
 * - Provides O(log n) average case for search and insert operations
 */
export class BinaryTree {
  /**
   * Creates a new BinaryTree instance
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   */
  constructor() {
    this.root = null;
  }

  /**
   * Inserts a new value into the binary search tree
   *
   * Algorithm: Recursively traverses the tree to find the correct position
   * based on BST property (left < root < right)
   *
   * @param {*} value - The value to insert
   * Time Complexity: O(log n) - average case for balanced tree, O(n) - worst case for unbalanced tree
   * Space Complexity: O(log n) - due to recursion stack
   */
  insert(value) {
    const node = new Node(value);

    // If tree is empty, set the new node as root
    if (!this.root) {
      this.root = node;
      return;
    }

    /**
     * Helper function to recursively insert a node
     * @param {Node} current - Current node being examined
     * @param {Node} node - Node to insert
     */
    const insertNode = (current, node) => {
      if (node.value < current.value) {
        // Insert in left subtree
        if (!current.left) {
          current.left = node;
        } else {
          insertNode(current.left, node);
        }
      } else {
        // Insert in right subtree
        if (!current.right) {
          current.right = node;
        } else {
          insertNode(current.right, node);
        }
      }
    };

    insertNode(this.root, node);
  }

  /**
   * Searches for a value in the binary search tree
   *
   * Algorithm: Traverses the tree using BST property to eliminate
   * half of the remaining nodes at each step
   *
   * @param {*} value - The value to search for
   * @returns {boolean} True if value is found, false otherwise
   * Time Complexity: O(log n) - average case for balanced tree, O(n) - worst case for unbalanced tree
   * Space Complexity: O(1)
   */
  search(value) {
    let current = this.root;

    while (current) {
      if (value === current.value) {
        return true;
      }

      // Navigate left or right based on BST property
      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  /**
   * Performs in-order traversal of the binary tree
   *
   * In-order traversal visits nodes in the order: left subtree, root, right subtree
   * For a BST, this results in a sorted sequence of values
   *
   * @returns {Array} Array of values in in-order traversal order
   * Time Complexity: O(n) - visits every node exactly once
   * Space Complexity: O(n) - due to result array and recursion stack
   */
  traverse() {
    const result = [];

    /**
     * Helper function to perform in-order traversal recursively
     * @param {Node} node - Current node being visited
     */
    const inOrder = (node) => {
      if (!node) return;

      inOrder(node.left); // Visit left subtree
      result.push(node.value); // Visit current node
      inOrder(node.right); // Visit right subtree
    };

    inOrder(this.root);
    return result;
  }

  /**
   * Checks if a binary tree is a valid Binary Search Tree (BST)
   *
   * Algorithm: Uses recursive approach with min/max bounds
   * - Each node must be within the valid range for its position
   * - Left subtree must be less than current node
   * - Right subtree must be greater than current node
   *
   * @param {Node} node - Root node of the tree to check
   * @param {number} min - Minimum allowed value for current subtree
   * @param {number} max - Maximum allowed value for current subtree
   * @returns {boolean} True if tree is a valid BST, false otherwise
   * Time Complexity: O(n) - visits every node exactly once
   * Space Complexity: O(log n) - due to recursion stack
   */
  static isBST(node, min = -Infinity, max = Infinity) {
    // Base case: empty tree is a valid BST
    if (!node) return true;

    // Check if current node's value is within valid range
    if (node.value <= min || node.value >= max) return false;

    // Recursively check left and right subtrees
    // Left subtree must be less than current node
    // Right subtree must be greater than current node
    return (
      this.isBST(node.left, min, node.value) &&
      this.isBST(node.right, node.value, max)
    );
  }
}
