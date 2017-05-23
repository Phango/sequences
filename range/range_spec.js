var range = require('./range');

describe('Range', () => {
  it('range() should return an array', () => {
    expect(range.byCount(1,5)).toEqual([1,2,3,4,5]);
    expect(range.byCount(5,5)).toEqual([5,6,7,8,9]);
  });
})
