import { REHYDRATE } from 'redux-persist/constants';
import { fromJS } from 'immutable';
import { testMovieMap1, testMovieMap2 } from 'mock';

import filmData, { setFilmData } from './reducer';
import ActionType from './constants';

const state = fromJS(testMovieMap1);

describe('Test reducer', () => {
  it('should return State with SET_FILM_DATA action', () => {
    const action = {
      type: ActionType.SET_FILM_DATA,
      payload: testMovieMap2,
    };
    const reducer = filmData(state, action);
    expect(reducer).toEqual(setFilmData(state, action));
  });

  it('should return State with UNKNOWN action', () => {
    const action = {
      type: 'unknown',
      payload: testMovieMap2,
    };
    const reducer = filmData(state, action);
    expect(reducer).toEqual(state);
  });

  it('should load state from local storage', () => {
    const newPayload = fromJS({
      searchString: '',
      searchBy: 'rate',
      sortBy: 'date',
    });
    const reducerChange = filmData(state, {
      type: REHYDRATE,
      payload: {
        filmData: newPayload,
      },
    });
    expect(reducerChange).toEqual(newPayload);
  });

  it('should load initial state', () => {
    const reducerChange = filmData(state, {
      type: REHYDRATE,
      payload: {},
    });
    expect(reducerChange).toEqual(state);
  });
});
