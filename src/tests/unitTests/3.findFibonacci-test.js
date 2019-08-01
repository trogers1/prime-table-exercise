'use strict';
// Test wrong input (string, char, float)
// Test output is correct with correct input
const assert = require('assert');

const findFibonacci = require('../../helpers/findFibonacci');

describe('helpers:', () => {
  describe('- findFibonacci()', () => {
    it('Should correctly generate when N = 1', () => {
      let testArray = [1];
      let result = findFibonacci(1);
      assert.deepStrictEqual(testArray, result);
    });
    it('Should correctly generate when N = 2', () => {
      let testArray = [1, 1];
      let result = findFibonacci(2);
      assert.deepStrictEqual(testArray, result);
    });
    it('Should generate only Fibonacci numbers', () => {
      let testArray = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
      let result = findFibonacci(10);
      assert.deepStrictEqual(testArray, result);
    });
  });
});
