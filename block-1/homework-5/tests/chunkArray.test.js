const chunkArray = require('../chunkArray');

describe('chunkArray', () => {
  it('should divide an array into chunks of given size', () => {
    const input = [1, 2, 3, 4, 5, 6];
    const result = chunkArray(input, 2);
    expect(result).toEqual([
      [1, 2],
      [3, 4],
      [5, 6],
    ]);
  });

  it('should handle array length not divisible by chunk size', () => {
    const input = [1, 2, 3, 4, 5];
    const result = chunkArray(input, 2);
    expect(result).toEqual([[1, 2], [3, 4], [5]]);
  });

  it('should return the whole array as one chunk if chunk size >= array length', () => {
    const input = [1, 2, 3];
    expect(chunkArray(input, 3)).toEqual([[1, 2, 3]]);
    expect(chunkArray(input, 5)).toEqual([[1, 2, 3]]);
  });

  it('should return an empty array if input is empty', () => {
    expect(chunkArray([], 3)).toEqual([]);
  });

  it('should throw error if chunk size is zero or negative', () => {
    expect(() => chunkArray([1, 2, 3], 0)).toThrow(
      'Chunk size must be greater than 0'
    );
    expect(() => chunkArray([1, 2, 3], -2)).toThrow(
      'Chunk size must be greater than 0'
    );
  });

  it('should throw error if chunk size is not a number', () => {
    expect(() => chunkArray([1, 2, 3], '2')).toThrow(
      'Chunk size must be a number'
    );
    expect(() => chunkArray([1, 2, 3], null)).toThrow(
      'Chunk size must be a number'
    );
  });
});
