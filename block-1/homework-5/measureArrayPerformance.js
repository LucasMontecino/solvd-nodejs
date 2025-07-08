const { performance } = require('node:perf_hooks');

const measureArrayPerformance = (fn, array) => {
  const start = performance.now();
  const result = fn(array);
  const end = performance.now();

  return {
    result,
    time: Number(end - start).toFixed(2) + ' ms',
  };
};

const data = Array.from({ length: 10000 }, (_, i) => i + 1);

const doubleWithMap = (arr) => arr.map((x) => x * 2);

const doubleWithFor = (arr) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2);
  }
  return result;
};

const result = measureArrayPerformance(doubleWithMap, data);
const result2 = measureArrayPerformance(doubleWithFor, data);
console.log('Result:', result.result.slice(0, 5));
console.log('Time:', result.time);

console.log('Result:', result2.result.slice(0, 5));
console.log('Time:', result2.time);
