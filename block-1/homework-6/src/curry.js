export const curry = (fn, ariety = fn.length) => {
  const curried = (...args) => {
    if (args.length >= ariety) {
      return fn(...args);
    } else {
      return (...nextArgs) => curried(...args, ...nextArgs);
    }
  };

  return curried;
};
