import { REHYDRATE } from 'redux-persist/constants';
import { fromJS } from 'immutable';

import { testBodyReducerData, testMovieResponse } from 'mock';
import bodyReducer, { setData } from './reducer';
import ActionType from './constants';

const state = fromJS(testBodyReducerData);

describe('Test reducer', () => {
  it('should return State with CHANGE_SEARCH_STRING action', () => {
    const action = {
      type: ActionType.SET_DATA,
      payload: testMovieResponse,
    };
    const reducer = bodyReducer(state, action);
    expect(reducer).toEqual(setData(state, action));
  });

  it('should return State with UNKNOWN action', () => {
    const action = {
      type: 'unknown',
      payload: testMovieResponse,
    };
    const reducer = bodyReducer(state, action);
    expect(reducer).toEqual(state);
  });

  it('should load state from local storage', () => {
    const newPayload = fromJS({
      searchString: '',
      searchBy: 'rate',
      sortBy: 'date',
    });
    const reducerChange = bodyReducer(state, {
      type: REHYDRATE,
      payload: {
        bodyReducer: newPayload,
      },
    });
    expect(reducerChange).toEqual(newPayload);
  });

  it('should load initial state', () => {
    const reducerChange = bodyReducer(state, {
      type: REHYDRATE,
      payload: {},
    });
    expect(reducerChange).toEqual(state);
  });
});
