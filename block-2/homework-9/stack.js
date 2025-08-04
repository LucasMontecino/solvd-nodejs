export class Stack {
  constructor() {
    this.stack = [];
  }

  push(item) {
    this.stack.push(item);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack.at(-1);
  }
}

export class MinMaxStack extends Stack {
  constructor() {
    super();
    this.minStack = [];
    this.maxStack = [];
  }

  push(item) {
    this.stack.push(item);

    const min =
      this.minStack.length === 0 ? item : Math.min(item, this.minStack.at(-1));

    this.minStack.push(min);

    const max =
      this.maxStack.length === 0 ? item : Math.max(item, this.maxStack.at(-1));

    this.maxStack.push(max);
  }

  pop() {
    this.minStack.pop();
    this.maxStack.pop();
    return this.stack.pop();
  }

  getMin() {
    return this.minStack.at(-1);
  }

  getMax() {
    return this.maxStack.at(-1);
  }
}
