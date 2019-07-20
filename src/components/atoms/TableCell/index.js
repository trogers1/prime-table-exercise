import styled from 'styled-components';

const TableCell = styled.td`
  border: 1px;
  background: ${props => (props.isHeader ? 'blue' : 'red')};
  color: ${props => (props.isHeader ? 'red' : 'blue')};
  ${props => props.isHeader && 'font-weight: bold'};
`;

export const TableHeaderCell = styled.th`
  border: 1px;
  background: ${props => (props.isHeader ? 'blue' : 'red')};
  color: ${props => (props.isHeader ? 'red' : 'blue')};
`;

export default TableCell;
