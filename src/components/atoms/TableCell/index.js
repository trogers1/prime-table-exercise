import React from 'react';
import styled from 'styled-components';

const CellDiv = styled.div`
  padding: 0.5rem;
  background: ${props => (props.isHeader ? '#0ba3ba' : '#c9c9c9')};
  color: ${props => (props.isHeader ? '#c9c9c9' : '#0ba3ba')};
  ${props => props.isHeader && 'font-weight: bold'};
  display: flex;
  justify-content: center;
`;

const TableCell = ({ children, ...props }) => (
  <td>
    <CellDiv {...props}>{children}</CellDiv>
  </td>
);

export const TableHeaderCell = ({ children, ...props }) => (
  <th>
    <CellDiv {...props}>{children}</CellDiv>
  </th>
);

export default TableCell;
