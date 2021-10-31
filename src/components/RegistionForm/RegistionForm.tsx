import { useContext } from 'react';

import { RegistionFormWrapper } from './RegistionForm.styled';
import { MenuToggleContext } from '../../store/context';

export const RegistionForm = () => {
  const { state } = useContext(MenuToggleContext);

  return <RegistionFormWrapper shouldDisplay={state.menuToggled}>This is a registion form</RegistionFormWrapper>;
};
