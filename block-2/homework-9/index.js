import { Stack } from './stack.js';

const myStack = new Stack();
console.log('first stack call..', myStack.stack);

myStack.push({ name: 'Lucas', username: 'lucasm9', age: 30 });
myStack.push({ name: 'Nicolas', username: 'nico19', age: 24 });

console.log('second stack call..', myStack.stack);

myStack.pop();

console.log('third stack call..', myStack.stack);

myStack.push({ name: 'Martin', username: 'martin5', age: 22 });
myStack.push({ name: 'Juan', username: 'juan23', age: 23 });

console.log('testing peek method from stack..', myStack.peek());
