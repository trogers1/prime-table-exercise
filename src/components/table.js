import React from 'react';
import styled from 'styled-components';

const StyledTable = styled.table`
  background: blue;
  font-color: red;
`;

const Row = styled.tr`
  font-size: 0.6rem;
`;

const Table = ({ primeNumbers }) => {
  return (
    <StyledTable>
      <thead>
        {primeNumbers.map((prime, index) => (
          <td key={`header-${index}`}>{prime}</td>
        ))}
      </thead>
    </StyledTable>
  );
};

export default Table;
