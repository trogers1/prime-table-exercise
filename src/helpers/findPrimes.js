/**
 * This function returns an array of prime numbers. The number of primes found
 * is defined by the parameter `numPrimes`.
 * @param   {number}    numPrimes   The number of primes found
 * @returns An array of booleans, any `true` value's index is a prime number.
 */
module.exports = (numPrimes, print = false) => {
  // Check type of numPrimes
  if (!Number.isInteger(Number(numPrimes))) {
    throw new Error(`'${numPrimes}' is not an integer. Please provide only an integer.`);
  }
  let primeArray = [];
  // This is the implementation of the Incremental Sieve of Eratosthenes
  let currNumber = 3;
  while (primeArray.length < numPrimes) {
    if (primeArray.length === 0) {
      primeArray.push(2);
      continue;
    } else if (primeArray.length === 1) {
      primeArray.push(3);
      continue;
    } else {
      currNumber += 2;
      let limit = Math.ceil(Math.sqrt(currNumber));
      let isPrime = true;
      for (let prime of primeArray) {
        let primeMultiple = prime;
        if (prime > limit) {
          break;
        }
        while (primeMultiple < currNumber) {
          primeMultiple += prime;
        }
        if (primeMultiple === currNumber) {
          isPrime = false;
        }
      }
      if (isPrime) {
        primeArray.push(currNumber);
      }
    }
  }
  if (print) {
    console.log(primeArray);
  }
  return primeArray;
};
