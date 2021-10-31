import styled from 'styled-components';

import { MenuContentProps } from './types';

export const MenuContentWrapper = styled.div<MenuContentProps>`
  display: ${(props: MenuContentProps) => (props.shouldDisplay ? 'block' : 'none')};
  font-size: x-large;
`;
