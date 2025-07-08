function customFilterUnique(array, cb) {
  const values = new Set();

  return array.filter((item) => {
    const key = cb(item);
    if (values.has(key)) return false;

    values.add(key);
    return true;
  });
}

module.exports = customFilterUnique;
