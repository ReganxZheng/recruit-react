import styled from 'styled-components';
import { ErrorMessage } from 'formik';

import { StyledWrapperProps } from 'src/common/types';

export const RegistionFormWrapper = styled.div<StyledWrapperProps>`
  display: ${(props) => (props.shouldDisplay ? 'none' : 'block')};
  max-width: 768px;
  padding: 0 48px;
  margin: 0 auto;
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  color: #ff0000;
`;

export const WelcomeWrapper = styled.div`
  text-align: center;
  font-size: large;
  padding: 20px 0 40px 0;
`;

export const SubmitButton = styled.button`
  width: 100%;
  text-align: center;
  background: #000000;
  color: #fcbd1b;
  border: 0;
  font-size: large;
  padding: 5px 0;

  &:hover,
  :active,
  :focus {
    background: #fcbd1b;
    color: #000000;
  }
`;
