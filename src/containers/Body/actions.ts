import ActionType from './constants';
import { ActionCreator } from './models';

export const setData: ActionCreator.SetData = payload => ({
  type: ActionType.SET_DATA,
  payload,
});

export const setStartData: ActionCreator.SetStartData = () => ({
  type: ActionType.SET_START_DATA,
});

export const addData: ActionCreator.AddData = () => ({
  type: ActionType.ADD_DATA,
});
