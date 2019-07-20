'use strict';
const assert = require('assert');

const isOnlyPrimes = require('../../helpers/isOnlyPrimes');

describe('helpers:', () => {
  describe('- isOnlyPrimes()', () => {
    it('Should fail when array includes a non-prime number', () => {
      assert(!isOnlyPrimes([1, 2, 3, 5, 7, 11, 13, 17, 19, 23]));
      assert(!isOnlyPrimes([2, 3, 5, 7, 10, 13, 17, 19, 23]));
    });
    it('Should succeed when array includes only prime numbers', () => {
      assert(isOnlyPrimes([2, 3, 5, 7, 11, 13, 17, 19, 23]));
    });
  });
});
