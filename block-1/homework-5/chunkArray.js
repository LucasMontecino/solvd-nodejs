function chunkArray(array, size) {
  if (size === 0 || size < 0)
    throw new Error('Chunk size must be greater than 0');
  if (typeof size !== 'number') throw new Error('Chunk size must be a number');

  let result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

module.exports = chunkArray;
