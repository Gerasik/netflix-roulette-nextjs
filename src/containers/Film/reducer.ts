import Immutable from 'immutable';
import { REHYDRATE } from 'redux-persist/constants';

import * as Models from 'models';
import { Action, State } from './models';
import ActionType from './constants';

const initialState: State = Immutable.fromJS({});

const filmData = (state = initialState, action: Models.IAction): State => {
  switch (action.type) {
    case ActionType.SET_FILM_DATA:
      return setFilmData(state, action);

    case REHYDRATE: {
      const incoming = action.payload.filmData;
      if (incoming) return incoming;
      return state;
    }

    default:
      return state;
  }
};

export default filmData;

export const setFilmData: Models.Reducer<State, Action.SetFilmData> = (state, action) => {
  return Immutable.fromJS(action.payload);
};
