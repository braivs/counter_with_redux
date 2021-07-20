import {AppStateType} from "../bll/store";

export const loadState = () => {
  const serializedState = localStorage.getItem('app-state');
  if (serializedState !== null) {
    return JSON.parse(serializedState);
  }
};

export const saveState = (state: AppStateType) => {
  const serializedState = JSON.stringify(state);
  localStorage.setItem('app-state', serializedState);
};