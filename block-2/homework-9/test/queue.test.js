import { Queue } from '../queue.js';

describe('Queue', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  test('enqueue should add elements to the queue', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.peek()).toBe(1);
  });

  test('dequeue should remove and return the first element', () => {
    queue.enqueue('a');
    queue.enqueue('b');
    const removed = queue.dequeue();
    expect(removed).toBe('a');
    expect(queue.peek()).toBe('b');
  });

  test('peek should return the first element without removing it', () => {
    queue.enqueue(42);
    expect(queue.peek()).toBe(42);
    expect(queue.peek()).toBe(42); // still the same
  });

  test('peek on empty queue should return undefined', () => {
    expect(queue.peek()).toBeUndefined();
  });

  test('dequeue on empty queue should return undefined', () => {
    expect(queue.dequeue()).toBeUndefined();
  });
});
