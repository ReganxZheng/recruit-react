import { useContext } from 'react';

import { ActionMap } from 'src/store/types';
import { HeaderWrapper, HeaderTitle, BurgerIcon, BackIcon } from './Header.styled';
import { MenuToggleContext } from 'src/store/context';

export const Header = () => {
  const { state, dispatch } = useContext(MenuToggleContext);

  const HeaderIcon = state.menuToggled ? (
    <BackIcon
      data-testid="test-backicon"
      onClick={() => {
        dispatch({ type: ActionMap.TOGGLE_MENU, payload: false });
      }}
    />
  ) : (
    <BurgerIcon
      data-testid="test-burgericon"
      onClick={() => {
        dispatch({ type: ActionMap.TOGGLE_MENU, payload: true });
      }}
    />
  );
  const title = state.menuToggled ? 'Menu' : 'Register card form';

  return (
    <HeaderWrapper data-testid="test-header">
      {HeaderIcon}
      <HeaderTitle>{title}</HeaderTitle>
    </HeaderWrapper>
  );
};
