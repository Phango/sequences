var Range = require('./range');

describe('Range', () => {
  var range = new Range();

  it('byCount() should return an array', () => {
    expect(range.byCount(1,5)).toEqual([1,2,3,4,5]);
    expect(range.byCount(5,5)).toEqual([5,6,7,8,9]);
  });
})
