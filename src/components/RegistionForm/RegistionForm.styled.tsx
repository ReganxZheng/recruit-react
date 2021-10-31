import styled from 'styled-components';

import { RegistionFormProps } from './types';

export const RegistionFormWrapper = styled.div<RegistionFormProps>`
  display: ${(props) => (props.shouldDisplay ? 'none' : 'block')};
  max-width: 768px;
  margin: 0 auto;
`;
