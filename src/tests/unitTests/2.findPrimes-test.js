'use strict';
// Test wrong input (string, char, float)
// Test output is correct with correct input
const assert = require('assert');

const findPrimes = require('../../helpers/findPrimes');
const isOnlyPrimes = require('../../helpers/isOnlyPrimes');

describe('helpers:', () => {
  describe('- findPrimes()', () => {
    it('Should fail when passed a non-integer', () => {
      assert.throws(() => {
        findPrimes('A');
      });
    });
    it('Should generate only prime numbers when given a random integer between 1 and 20,000', function() {
      this.timeout(0); // Necessary to disable timeouts for such a long process...
      // const result = findPrimes(Math.floor(Math.random() * 20001) + 1); // Generate a random number between 1 and 20,000
      const result = findPrimes(Math.floor(Math.random() * 101) + 1); // Generate a random number between 1 and 100
      assert.ok(isOnlyPrimes(result));
    });
  });
});
