import React from 'react';
import styled from 'styled-components';

import TableCell, { TableHeaderCell } from '../../atoms/TableCell';
import TableRow from '../../molecules/TableRow';

const StyledTable = styled.table`
  border: 2px black;
  border-radius: 3px;
`;

const Table = ({ primeNumbers }) => {
  return (
    <StyledTable>
      <thead>
        <tr>
          <TableHeaderCell isHeader />
          {primeNumbers.map((prime, index) => (
            <TableHeaderCell isHeader key={`header-${index}`}>
              {prime}
            </TableHeaderCell>
          ))}
        </tr>
      </thead>
      {primeNumbers.length && (
        <tbody>
          {primeNumbers.map((val, index) => (
            <TableRow currentNumber={val} primeNumbers={primeNumbers} key={`Row.${val}.${index}`} />
          ))}
        </tbody>
      )}
    </StyledTable>
  );
};

export default Table;
