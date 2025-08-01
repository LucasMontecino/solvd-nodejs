import { List } from '../linkedList.js';

describe('List', () => {
  let list;

  beforeEach(() => {
    list = new List();
  });

  test('should insert elements into the list', () => {
    const node = list.insert('a');
    expect(node.data).toBe('a');
    expect(list.head.data).toBe('a');
  });

  test('should return "the list is empty!" if getAll is called on empty list', () => {
    expect(list.getAll()).toBe('the list is empty!');
  });

  test('should return an array of all elements in order', () => {
    list.insert('a');
    list.insert('b');
    list.insert('c');
    expect(list.getAll()).toEqual(['a', 'b', 'c']);
  });

  test('should find an item in the list', () => {
    list.insert('a');
    list.insert('b');
    expect(list.search('b')).toBe('item find!');
  });

  test('should return "item not found!" if item is not in the list', () => {
    list.insert('a');
    expect(list.search('b')).toBe('item not found!');
  });

  test('should return "the list is empty!" when searching empty list', () => {
    expect(list.search('a')).toBe('the list is empty!');
  });

  test('should remove head item', () => {
    list.insert('a');
    expect(list.remove('a')).toBeUndefined(); // this is the case when head exists but no next
    expect(list.head).toBeNull();
  });

  test('should remove head item and promote next', () => {
    list.insert('a');
    list.insert('b');
    expect(list.remove('a')).toBe('deleted element!');
    expect(list.head.data).toBe('b');
  });

  test('should remove an item in the middle of the list', () => {
    list.insert('a');
    list.insert('b');
    list.insert('c');
    expect(list.remove('b')).toBe('deleted element!');
    expect(list.search('b')).toBe('item not found!');
  });

  test('should return "item not found!" if item is not in list', () => {
    list.insert('a');
    expect(list.remove('b')).toBe('item not found!');
  });

  test('should return "the list is empty!" if removing from empty list', () => {
    expect(list.remove('a')).toBe('the list is empty!');
  });

  test('length getter returns the length size properly', () => {
    list.insert('x');
    const size = list.length;
    expect(size).toBe(1);
  });
});
