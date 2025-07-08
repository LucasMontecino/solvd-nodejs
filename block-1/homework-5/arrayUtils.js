const getArrayIntersection = (arr1, arr2) => {
  const set = new Set(arr2);
  const result = new Set();

  for (const value of arr1) {
    if (set.has(value)) {
      result.add(value);
    }
  }
  return Array.from(result);
};

const getArrayUnion = (arr1, arr2) => {
  return Array.from(new Set([...arr1, ...arr2]));
};

module.exports = { getArrayIntersection, getArrayUnion };
