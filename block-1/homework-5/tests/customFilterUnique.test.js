const customFilterUnique = require('../customFilterUnique');

describe('customFilterUnique', () => {
  it('should return only unique numbers based on value', () => {
    const input = [1, 2, 2, 3, 4, 4, 5];
    const result = customFilterUnique(input, (item) => item);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
  it('should return only unique strings based on lowercase value', () => {
    const input = ['Apple', 'apple', 'Banana', 'banana', 'APPLE'];
    const result = customFilterUnique(input, (item) => item.toLowerCase());
    expect(result).toEqual(['Apple', 'Banana']);
  });

  it('should return unique objects based on a specific property', () => {
    const input = [
      { id: 1, name: 'Lucas' },
      { id: 2, name: 'Ana' },
      { id: 1, name: 'Lucas' },
      { id: 3, name: 'María' },
      { id: 2, name: 'Ana' },
    ];
    const result = customFilterUnique(input, (item) => item.id);
    expect(result).toEqual([
      { id: 1, name: 'Lucas' },
      { id: 2, name: 'Ana' },
      { id: 3, name: 'María' },
    ]);
  });

  it('should return an empty array if input is empty', () => {
    const result = customFilterUnique([], (item) => item);
    expect(result).toEqual([]);
  });

  it('should handle complex uniqueness logic (e.g. string length)', () => {
    const input = ['one', 'two', 'three', 'four', 'five', 'six'];
    const result = customFilterUnique(input, (item) => item.length);
    expect(result).toEqual(['one', 'three', 'four']);
  });
});
