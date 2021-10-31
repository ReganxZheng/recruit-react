import { LayoutWrapper } from './Layout.styled';
import { Header } from '../Header';
import { MenuToggleProvider } from 'src/store/context';

export const Layout: React.FC = ({ children }) => (
  <MenuToggleProvider>
    <LayoutWrapper data-testid="test-layout">
      <Header />
      {children}
    </LayoutWrapper>
  </MenuToggleProvider>
);
