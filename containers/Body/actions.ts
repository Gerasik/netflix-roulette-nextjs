import ActionType from './constants';
import { ActionCreator } from './models';

export const setData: ActionCreator.SetData = payload => ({
  type: ActionType.SET_DATA,
  payload,
});

export const setStartData: ActionCreator.SetStartData = () => ({
  type: ActionType.SET_START_DATA,
});

// export const increment: Action. = payload => ({
//   type: ActionType.,
//   payload,
// });
