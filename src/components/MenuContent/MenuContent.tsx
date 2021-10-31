import { useContext } from 'react';

import { MenuContentWrapper } from './MenuContent.styled';
import { MenuToggleContext } from 'src/store/context';

export const MenuContent = () => {
  const { state } = useContext(MenuToggleContext);

  return (
    <MenuContentWrapper shouldDisplay={state.menuToggled} data-testid="test-menucontent">
      This is a menu content
    </MenuContentWrapper>
  );
};
