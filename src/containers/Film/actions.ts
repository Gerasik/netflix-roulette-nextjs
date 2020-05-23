import ActionType from './constants';
import { ActionCreator } from './models';

export const setFilmData: ActionCreator.SetFilmData = payload => ({
  type: ActionType.SET_FILM_DATA,
  payload,
});

export const setFilmId: ActionCreator.SetFilmId = payload => ({
  type: ActionType.SET_FILM_ID,
  payload,
});
