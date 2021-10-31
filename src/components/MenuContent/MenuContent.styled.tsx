import styled from 'styled-components';

import { StyledWrapperProps } from 'src/common/types';

export const MenuContentWrapper = styled.div<StyledWrapperProps>`
  display: ${(props: StyledWrapperProps) => (props.shouldDisplay ? 'block' : 'none')};
  font-size: x-large;
`;
