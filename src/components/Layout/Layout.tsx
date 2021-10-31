import { LayoutWrapper } from './Layout.styled';
import { LayoutProps } from './types';
import { Header } from '../Header';
import { MenuToggleProvider } from 'src/store/context';

export const Layout = ({ children }: LayoutProps) => (
  <MenuToggleProvider>
    <LayoutWrapper data-testid="test-layout">
      <Header />
      {children}
    </LayoutWrapper>
  </MenuToggleProvider>
);
