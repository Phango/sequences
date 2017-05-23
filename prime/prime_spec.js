'use strict';
var Prime = require('./prime');

describe('Prime', () => {
  var prime = new Prime();

  describe('byCount()', () => {
    it('5 should return an array', () => {
      expect(prime.byCount(5)).toEqual([1,2,3,5,7]);
    });

    it('10 should return an array', () => {
      expect(prime.byCount(10)).toEqual([1,2,3,5,7,11,13,17,19,23]);
    });

  });

  describe('isPrime()', () => {
    it('1 should return a boolean', () => {
      expect(prime.isPrime(1)).toBeTruthy();
    });

    it('2 should be true', () => {
      expect(prime.isPrime(2)).toBeTruthy();
    });

    it('3 should be true', () => {
      expect(prime.isPrime(3)).toBeTruthy();
    });

    it('4 should be true', () => {
      expect(prime.isPrime(4)).toBeFalsy();
    });

    it('5 should be true', () => {
      expect(prime.isPrime(5)).toBeTruthy();
    });

    it('6 should be true', () => {
      expect(prime.isPrime(6)).toBeFalsy();
    });

    it('7 should be true', () => {
      expect(prime.isPrime(7)).toBeTruthy();
    });

    it('8 should be true', () => {
      expect(prime.isPrime(8)).toBeFalsy();
    });
  })
})
