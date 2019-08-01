'use strict';

module.exports = numFib => {
  const fibonacciArray = [];

  if (numFib >= 1) {
    fibonacciArray.push(1);
  }
  if (numFib >= 2) {
    fibonacciArray.push(1);
  }
  for (let i = 2; i < numFib; i++) {
    fibonacciArray.push(fibonacciArray[i - 2] + fibonacciArray[i - 1]);
  }
  return fibonacciArray;
};
