const { getArrayIntersection, getArrayUnion } = require('../arrayUtils');

describe('getArrayIntersection', () => {
  it('should return common elements between two arrays', () => {
    const a = [1, 2, 3, 4];
    const b = [3, 4, 5, 6];
    expect(getArrayIntersection(a, b)).toEqual([3, 4]);
  });

  it('should return an empty array when there are no common elements', () => {
    const a = [1, 2];
    const b = [3, 4];
    expect(getArrayIntersection(a, b)).toEqual([]);
  });

  it('should return common elements only once', () => {
    const a = [1, 2, 2, 3];
    const b = [2, 2, 3, 4];
    expect(getArrayIntersection(a, b)).toEqual([2, 3]);
  });

  it('should return empty array if one input is empty', () => {
    expect(getArrayIntersection([], [1, 2, 3])).toEqual([]);
    expect(getArrayIntersection([1, 2, 3], [])).toEqual([]);
  });
});

describe('getArrayUnion', () => {
  it('should return all unique elements from both arrays', () => {
    const a = [1, 2, 3];
    const b = [3, 4, 5];
    expect(getArrayUnion(a, b).sort()).toEqual([1, 2, 3, 4, 5]);
  });

  it('should remove duplicates within and across arrays', () => {
    const a = [1, 2, 2, 3];
    const b = [3, 3, 4];
    expect(getArrayUnion(a, b).sort()).toEqual([1, 2, 3, 4]);
  });

  it('should return only unique values if both arrays are identical', () => {
    const a = [1, 2, 3];
    const b = [1, 2, 3];
    expect(getArrayUnion(a, b)).toEqual([1, 2, 3]);
  });

  it('should return the non-empty array if the other is empty', () => {
    expect(getArrayUnion([], [1, 2])).toEqual([1, 2]);
    expect(getArrayUnion([3, 4], [])).toEqual([3, 4]);
  });

  it('should return empty array if both are empty', () => {
    expect(getArrayUnion([], [])).toEqual([]);
  });
});
