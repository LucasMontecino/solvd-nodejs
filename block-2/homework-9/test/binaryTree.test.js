import { BinaryTree } from '../binaryTree';

describe('BinaryTree', () => {
  let tree;

  beforeEach(() => {
    tree = new BinaryTree();
  });

  test('should initialize with null root', () => {
    expect(tree.root).toBeNull();
  });

  test('should insert root node when tree is empty', () => {
    tree.insert(10);
    expect(tree.root.value).toBe(10);
    expect(tree.root.left).toBeNull();
    expect(tree.root.right).toBeNull();
  });

  test('should insert nodes correctly on the left and right', () => {
    tree.insert(10);
    tree.insert(5);
    tree.insert(15);

    expect(tree.root.value).toBe(10);
    expect(tree.root.left.value).toBe(5);
    expect(tree.root.right.value).toBe(15);
  });

  test('should insert multiple nodes in correct positions', () => {
    tree.insert(10);
    tree.insert(5);
    tree.insert(15);
    tree.insert(2);
    tree.insert(7);
    tree.insert(12);
    tree.insert(20);

    expect(tree.root.left.left.value).toBe(2);
    expect(tree.root.left.right.value).toBe(7);
    expect(tree.root.right.left.value).toBe(12);
    expect(tree.root.right.right.value).toBe(20);
  });

  test('should find a value that exists in the tree', () => {
    tree.insert(10);
    tree.insert(5);
    tree.insert(15);

    expect(tree.search(5)).toBe(true);
    expect(tree.search(10)).toBe(true);
    expect(tree.search(15)).toBe(true);
  });

  test('should return false for a value that does not exist', () => {
    tree.insert(10);
    tree.insert(5);
    tree.insert(15);

    expect(tree.search(99)).toBe(false);
    expect(tree.search(-1)).toBe(false);
  });

  test('should return an in-order traversal of the tree', () => {
    tree.insert(10);
    tree.insert(5);
    tree.insert(15);
    tree.insert(2);
    tree.insert(7);
    tree.insert(12);
    tree.insert(20);

    const traversal = tree.traverse();
    expect(traversal).toEqual([2, 5, 7, 10, 12, 15, 20]);
  });

  test('should return an empty array when traversing an empty tree', () => {
    expect(tree.traverse()).toEqual([]);
  });
});
