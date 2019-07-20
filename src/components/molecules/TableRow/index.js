import React from 'react';

import TableCell from '../../atoms/TableCell';

function TableRow({ currentNumber, primeNumbers }) {
  return (
    <tr>
      <TableCell isHeader>{currentNumber}</TableCell>
      {primeNumbers.map((val, index) => (
        <TableCell key={`Row.${currentNumber}.${val}.${index}`}>{val * currentNumber}</TableCell>
      ))}
    </tr>
  );
}

export default TableRow;
