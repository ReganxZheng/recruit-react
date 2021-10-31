import React, { createContext, useReducer } from 'react';

import { menuToggleReducer } from './reducers';
import { initialStateProps } from './types';

const initialState: initialStateProps = {
  menuToggled: false,
};

const MenuToggleContext = createContext<{
  state: initialStateProps;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

const MenuToggleProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(menuToggleReducer, initialState);
  return <MenuToggleContext.Provider value={{ state, dispatch }}>{children}</MenuToggleContext.Provider>;
};

export { MenuToggleContext, MenuToggleProvider };
