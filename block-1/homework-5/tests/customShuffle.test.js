const customShuffle = require('../customShuffle');

describe('customShuffle', () => {
  it('should return a new array with same elements in different order', () => {
    const input = [3, 4, 5, 2, 1];
    const result = customShuffle(input);

    expect(result).toHaveLength(input.length);
    expect(result.sort()).toEqual(input.slice().sort());
    expect(result).not.toEqual(input);
  });

  it('should not mutate the original array', () => {
    const input = [10, 20, 30];
    const originalCopy = [...input];
    customShuffle(input);
    expect(input).toEqual(originalCopy);
  });

  it('should return an empty array if input is empty', () => {
    expect(customShuffle([])).toEqual([]);
  });

  it('should work with one-element array', () => {
    expect(customShuffle([42])).toEqual([42]);
  });

  it('should eventually produce different orderings', () => {
    const input = [1, 2, 3];
    const seen = new Set();
    for (let i = 0; i < 50; i++) {
      seen.add(customShuffle(input).join(','));
    }
    expect(seen.size).toBeGreaterThanOrEqual(3);
  });
});
