var fibonacci = require('./fibonacci.js');

describe('Fibonacci', function() {

  it('byCount() return an array', () => {
    expect(fibonacci.byCount(1)).toEqual([1,1]);
    expect(fibonacci.byCount(2)).toEqual([1,1]);
    expect(fibonacci.byCount(3)).toEqual([1,1,2]);
    expect(fibonacci.byCount(5)).toEqual([1,1,2,3,5]);
    expect(fibonacci.byCount(10)).toEqual([1,1,2,3,5,8,13,21,34,55]);
  });

  it('byMaxValue() should return an array', () => {
    expect(fibonacci.byMaxValue(10)).toEqual([1,1,2,3,5,8]);
  })
})
