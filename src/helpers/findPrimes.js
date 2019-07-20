/**
 * This function returns an array of prime numbers. The number of primes found
 * is defined by the parameter `numPrimes`.
 * @param   {number}    numPrimes   The number of primes found
 * @returns An array of booleans, any `true` value's index is a prime number.
 */
module.exports = numPrimes => {
  // Check type of numPrimes
  if (!Number.isInteger(Number(numPrimes))) {
    throw new Error(`'${numPrimes}' is not an integer. Please provide only an integer.`);
  }
  console.log(`Generating ${numPrimes} primes...`);
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
        let testNumber = prime;
        if (prime > limit) {
          break;
        }
        while (testNumber < currNumber) {
          testNumber += prime;
        }
        if (testNumber === currNumber) {
          isPrime = false;
        }
      }
      if (isPrime) {
        primeArray.push(currNumber);
      }
    }
  }
  console.log('prime array', primeArray);
  return primeArray;
};
