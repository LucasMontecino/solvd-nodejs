import { Stack } from '../stack.js';

describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  test('push should add elements to the stack', () => {
    stack.push(1);
    stack.push(2);
    expect(stack.peek()).toBe(2);
  });

  test('pop should remove and return the last element', () => {
    stack.push(10);
    stack.push(20);
    const popped = stack.pop();
    expect(popped).toBe(20);
    expect(stack.peek()).toBe(10);
  });

  test('peek should return the last element without removing it', () => {
    stack.push('a');
    const top = stack.peek();
    expect(top).toBe('a');
    expect(stack.peek()).toBe('a'); // still there
  });

  test('peek on empty stack should return undefined', () => {
    expect(stack.peek()).toBeUndefined();
  });

  test('pop on empty stack should return undefined', () => {
    expect(stack.pop()).toBeUndefined();
  });
});
