const smallestSortWindow = require('./day8');


  it('returns [0, 0] for an already sorted array', () => {
    const array = [1, 2, 3, 4, 5];
    expect(smallestSortWindow(array)).toEqual([0,0]);
  });

  it('returns [0, 1] for an array with two elements in descending order', () => {
    const array = [2, 1];
    expect(smallestSortWindow(array)).toEqual([0, 1]);
  });

  it('returns [0, 4] for an array with elements in random order', () => {
    const array = [5, 4, 3, 2, 1];
    expect(smallestSortWindow(array)).toEqual([0, 4]);
  });

  it('returns [0, 6] for an array with multiple elements in random order', () => {
    const array = [5, 6, 7, 9, 8, 1, 2];
    expect(smallestSortWindow(array)).toEqual([0, 6]);
  });

  it('returns [1, 6] for an array with elements partially sorted', () => {
    const array = [3,5,23,4,60,8,27,80];
    expect(smallestSortWindow(array)).toEqual([1, 6]);
  });

  it('returns [1, 5] for an array with elements partially sorted', () => {
    const array = [1, 3, 4, 2, 6, 5];
    expect(smallestSortWindow(array)).toEqual([1, 5]);
  });
