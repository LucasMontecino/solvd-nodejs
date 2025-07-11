export const debounce = (fn, time = 500) => {
  let timerId;
  return (...args) => {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      fn(...args);
    }, time);
  };
};
