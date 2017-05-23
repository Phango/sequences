var fibonacci = require('./fibonacci.js');

describe('Fibonacci', function() {

  it('sequence return an array', () => {
    expect(fibonacci.sequence(1)).toEqual([1,1]);
    expect(fibonacci.sequence(2)).toEqual([1,1]);
    expect(fibonacci.sequence(3)).toEqual([1,1,2]);
    expect(fibonacci.sequence(5)).toEqual([1,1,2,3,5]);
    expect(fibonacci.sequence(10)).toEqual([1,1,2,3,5,8,13,21,34,55]);
  });

  it('upTo should return an array', () => {
    expect(fibonacci.upTo(10)).toEqual([1,1,2,3,5,8]);
  })
})
