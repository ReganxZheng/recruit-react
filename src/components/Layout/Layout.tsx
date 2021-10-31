import { LayoutWrapper } from './Layout.styled';
import { LayoutProps } from './types';

import { Header } from '../Header';

export const Layout = ({ children }: LayoutProps) => (
  <LayoutWrapper data-testid="test-layout">
    <Header />
    {children}
  </LayoutWrapper>
);
