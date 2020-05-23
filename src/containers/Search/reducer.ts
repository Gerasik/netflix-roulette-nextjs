import Immutable from 'immutable';
import { REHYDRATE } from 'redux-persist/constants';

import * as Models from 'models';
import { Action, State } from './models';
import ActionType from './constants';

const initialState: State = Immutable.fromJS({
  searchString: '',
  searchBy: 'title',
  sortBy: 'vote_average',
});

const searchReducer = (state = initialState, action: Models.IAction): State => {
  switch (action.type) {
    case ActionType.CHANGE_SEARCH_STRING:
      return changeSearchString(state, action);

    case ActionType.CHANGE_SEARCH_BY:
      return changeSearchBy(state, action);

    case ActionType.CHANGE_SORT_BY:
      return changeSortBy(state, action);

    case REHYDRATE: {
      const incoming = action.payload.searchReducer;
      if (incoming) return incoming;
      return state;
    }

    default:
      return state;
  }
};

export default searchReducer;

export const changeSearchString: Models.Reducer<State, Action.ChangeSearchString> = (
  state,
  action
) => {
  return state.set('searchString', action.payload);
};

export const changeSearchBy: Models.Reducer<State, Action.ChangeSearchBy> = (state, action) => {
  return state.set('searchBy', action.payload);
};

export const changeSortBy: Models.Reducer<State, Action.ChangeSortBy> = (state, action) => {
  return state.set('sortBy', action.payload);
};
