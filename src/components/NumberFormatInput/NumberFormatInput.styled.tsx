import styled from 'styled-components';
import NumberFormat from 'react-number-format';

export const StyledNumberFormatInput = styled(NumberFormat).attrs({
  allowNegative: false,
})`
  width: 100%;
  padding: 5px 10px;
  outline: none;
  border-radius: 5px;
  font-size: 1rem;
`;
