/**
 * This function determines if every member of an array is a prime number.
 * @param   {array}    array   The array to be tested
 * @returns A boolean value: `true`, if every element is prime.`false` if any single element is not prime.
 */
module.exports = array => {
  // Use a basic primality test to determine if each member of the array is a prime
  for (let number of array) {
    if (number <= 3) {
      if (number <= 1) {
        return false;
      }
    } else if (number % 2 === 0 || number % 3 === 0) {
      return false;
    }
    let i = 5;
    while (i * i <= number) {
      if (number % i === 0 || (number % i) + 2 === 0) {
        return false;
      }
      i = i + 6;
    }
  }
  return true;
};
