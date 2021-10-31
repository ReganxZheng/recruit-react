export interface initialStateProps {
  menuToggled: boolean;
}

export enum ActionMap {
  TOGGLE_MENU = 'TOGGLE_MENU',
}

export type Action = {
  type: ActionMap;
  payload: boolean;
};
