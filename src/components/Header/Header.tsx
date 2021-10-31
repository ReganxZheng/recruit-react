import { HeaderWrapper, HeaderTitle, BurgerIcon, BackIcon } from './Header.styled';

export const Header = () => {
  return (
    <HeaderWrapper data-testid="test-header">
      <BurgerIcon />
      <HeaderTitle>Register card form</HeaderTitle>
    </HeaderWrapper>
  );
};
