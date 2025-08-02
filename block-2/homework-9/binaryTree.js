class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new Node(value);
    if (!this.root) {
      this.root = node;
      return;
    }

    const insertNode = (current, node) => {
      if (node.value < current.value) {
        if (!current.left) {
          current.left = node;
        } else {
          insertNode(current.left, node);
        }
      } else {
        if (!current.right) {
          current.right = node;
        } else {
          insertNode(current.right, node);
        }
      }
    };

    insertNode(this.root, node);
  }

  search(value) {
    let current = this.root;

    while (current) {
      if (value === current.value) {
        return true;
      }

      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  traverse() {
    const result = [];

    const inOrder = (node) => {
      if (!node) return;

      inOrder(node.left);
      result.push(node.value);
      inOrder(node.right);
    };

    inOrder(this.root);
    return result;
  }
}
