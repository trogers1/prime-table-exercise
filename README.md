# prime-table-exercise

An excercise to create a multiplication table of any number of prime numbers.

## How to run the application

### Web app

In the project directory, you can run: `npm i && npm start` to install required dependencies and run the web app locally on [http://localhost:3000](http://localhost:3000).

Upon visiting that url, you will be presented with an input box into which you can type to test the functionality.

### Unit Tests

In the project directory, use `npm run unit` to run the unit tests.

### Testing Performance of `findPrimes()`

If you would just like to run `findPrimes()` to see how performant it is, I created a tiny bash script to make that easy. Simply run `source testFindPrimes.sh <the number of primes you want to generate>` from within the project directory. The resultant array of primes should output to the terminal.

## What I'm pleased with

I was happy to have an excuse to use React hooks and was quite happy with the simple result, overall. The `Table` components (`Table`, `TableRow`, and `TableCell`), could easily be reused for other dynamically generated tables.

I am also pretty happy with my `findPrimes()` algorithm. It was fun to implement an Incremental Sieve of Eratosthenes algorithm. The `isOnlyPrimes()` algorithm was also fun to write in a way that was a bit more performant.

## What I'd do, if I had more time

There are definitely a few things I would have done, had I more time.

- I would have had a loading gif replace the table whenever the table was taking a while to generate (such as for large numbers of primes).
- I would have added animations to make the table not just 'pop' in and out. That sort of thing adds polish.
- I would have `debounced` the input-value-updating hook, so that the `findPrimes()` function was only called after the user was done typing. The extra rerendering is annoying.
