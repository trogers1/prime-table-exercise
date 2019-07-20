import React from 'react';
import findPrimes from './helpers/findPrimes';
import styled from 'styled-components';

import Table from './components/organisms/Table';

const ErrorMessage = styled.div`
  color: red;
  font-size: 0.8rem;
`;

class App extends React.Component {
  state = {
    error: '',
    inputVal: '',
    isLoading: false,
    primeNumbers: null
  };
  async componentDidUpdate(prevProps, prevState) {
    console.log(this.state, prevState);
    let result;
    if (this.state.inputVal !== prevState.inputVal) {
      try {
        if (this.state.inputVal !== '') {
          this.setState({ error: '', isLoading: true });
          result = await findPrimes(this.state.inputVal);
        }
        this.setState({ primeNumbers: result });
      } catch (error) {
        this.setState({ error: error.message });
        return;
      }
    }
    console.log(result);
  }
  render() {
    console.log('app state', this.state);
    const { primeNumbers } = this.state;
    return (
      <>
        <input
          onChange={event => this.setState({ inputVal: event.target.value })}
          placeholder="Enter an integer"
          max="20000"
        />
        {this.state.error && <ErrorMessage>{this.state.error}</ErrorMessage>}
        {primeNumbers && <Table primeNumbers={primeNumbers} />}
      </>
    );
  }
}

export default App;
