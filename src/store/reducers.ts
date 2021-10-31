import { initialStateProps, Action, ActionMap } from './types';

export const menuToggleReducer = (state: initialStateProps, action: Action): initialStateProps => {
  const { type, payload } = action;

  const mapper = {
    [ActionMap.TOGGLE_MENU]: (state: initialStateProps, payload: boolean) => ({ ...state, menuToggled: payload }),
  }[type];

  return mapper ? mapper(state, payload) : state;
};
