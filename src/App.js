import React, { useState, useEffect } from 'react';
import findPrimes from './helpers/findPrimes';
import styled from 'styled-components';

import Table from './components/organisms/Table';

const ErrorMessage = styled.div`
  color: red;
  font-size: 0.8rem;
`;

function App() {
  const [error, setError] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [primeNumbers, setPrimeNumbers] = useState(null);
  useEffect(() => {
    let result;
    try {
      if (inputValue !== '') {
        setError('');
        setLoading(true);
        result = findPrimes(inputValue);
      }
      setPrimeNumbers(result);
    } catch (err) {
      setError(err.message);
      return;
    }
  }, [inputValue]);
  return (
    <>
      <input
        onChange={event => setInputValue(event.target.value)}
        placeholder="Enter an integer"
        max="20000"
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {primeNumbers && <Table primeNumbers={primeNumbers} />}
    </>
  );
}

export default App;
