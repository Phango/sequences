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

  it('byN() should return the number at N', () => {
    expect(fibonacci.byN(0)).toEqual(1)
    expect(fibonacci.byN(1)).toEqual(1)
    expect(fibonacci.byN(2)).toEqual(2)
    expect(fibonacci.byN(3)).toEqual(3)
    expect(fibonacci.byN(4)).toEqual(5)
    expect(fibonacci.byN(5)).toEqual(8)
    expect(fibonacci.byN(6)).toEqual(13)
    expect(fibonacci.byN(7)).toEqual(21)
  })


  it('recursiveByN() should return the number at N', () => {
    expect(fibonacci.recursiveByN(0)).toEqual(1)
    expect(fibonacci.recursiveByN(1)).toEqual(1)
    expect(fibonacci.recursiveByN(2)).toEqual(2)
    expect(fibonacci.recursiveByN(3)).toEqual(3)
    expect(fibonacci.recursiveByN(4)).toEqual(5)
    expect(fibonacci.recursiveByN(5)).toEqual(8)
    expect(fibonacci.recursiveByN(6)).toEqual(13)
    expect(fibonacci.recursiveByN(7)).toEqual(21)
  })

  it('memoByN() should return the number at N', () => {
    expect(fibonacci.memoByN(0)).toEqual(1)
    expect(fibonacci.memoByN(1)).toEqual(1)
    expect(fibonacci.memoByN(2)).toEqual(2)
    expect(fibonacci.memoByN(3)).toEqual(3)
    expect(fibonacci.memoByN(4)).toEqual(5)
    expect(fibonacci.memoByN(5)).toEqual(8)
    expect(fibonacci.memoByN(6)).toEqual(13)
    expect(fibonacci.memoByN(7)).toEqual(21)
  })

})
