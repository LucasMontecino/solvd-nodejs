export const throttle = (fn, interval = 300) => {
  let lastExecuted = 0;
  return (...args) => {
    const now = Date.now();
    if (now - lastExecuted >= interval) {
      lastExecuted = now;
      fn(...args);
    }
  };
};
