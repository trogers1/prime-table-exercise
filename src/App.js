import React, { useState, useEffect } from 'react';
import findPrimes from './helpers/findPrimes';
import styled from 'styled-components';

import Table from './components/organisms/Table';

const ErrorMessage = styled.div`
  color: red;
  font-size: 0.8rem;
  margin-botton: 0 0 2rem 1rem;
`;

const StyledInput = styled.input`
  width: 10rem;
  border-radius: 3px;
  margin: 2rem 2rem 0 1rem;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

function App() {
  const [error, setError] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [primeNumbers, setPrimeNumbers] = useState(null);
  useEffect(() => {
    document.body.style.backgroundColor = '#262627';
  });
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
    <Content>
      <StyledInput
        onChange={event => setInputValue(event.target.value)}
        placeholder="Enter an integer"
        max="20000"
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {primeNumbers && <Table primeNumbers={primeNumbers} />}
    </Content>
  );
}

export default App;
