import { REHYDRATE } from 'redux-persist/constants';
import { fromJS } from 'immutable';

import { testSearchReducerData } from 'mock';
import searchReducer, { changeSearchString, changeSearchBy, changeSortBy } from './reducer';
import ActionType from './constants';

const testData = 'hello';
const state = fromJS(testSearchReducerData);

describe('Test reducer', () => {
  it('should return State with CHANGE_SEARCH_STRING action', () => {
    const action = {
      type: ActionType.CHANGE_SEARCH_STRING,
      payload: testData,
    };
    const reducer = searchReducer(state, action);
    expect(reducer).toEqual(changeSearchString(state, action));
  });

  it('should return State with CHANGE_SEARCH_BY action', () => {
    const action = {
      type: ActionType.CHANGE_SEARCH_BY,
      payload: testData,
    };
    const reducer = searchReducer(state, action);
    expect(reducer).toEqual(changeSearchBy(state, action));
  });

  it('should return State with CHANGE_SORT_BY action', () => {
    const action = {
      type: ActionType.CHANGE_SORT_BY,
      payload: testData,
    };
    const reducer = searchReducer(state, action);
    expect(reducer).toEqual(changeSortBy(state, action));
  });

  it('should return State with UNKNOWN action', () => {
    const action = {
      type: 'unknown',
      payload: testData,
    };
    const reducer = searchReducer(state, action);
    expect(reducer).toEqual(state);
  });

  it('should load state from local storage', () => {
    const newPayload = fromJS({
      searchString: '',
      searchBy: 'rate',
      sortBy: 'date',
    });
    const reducerChange = searchReducer(fromJS(testSearchReducerData), {
      type: REHYDRATE,
      payload: {
        searchReducer: newPayload,
      },
    });
    expect(reducerChange).toEqual(newPayload);
  });

  it('should load initial state', () => {
    const reducerChange = searchReducer(fromJS(testSearchReducerData), {
      type: REHYDRATE,
      payload: {},
    });
    expect(reducerChange).toEqual(fromJS(testSearchReducerData));
  });
});

describe('Test actions function', () => {
  it('should return CHANGE_SEARCH_STRING State with testData', () => {
    const action = {
      type: ActionType.CHANGE_SEARCH_STRING,
      payload: testData,
    };
    const actionFn = changeSearchString(state, action);
    expect(actionFn.get('searchString')).toBe(testData);
  });

  it('should return State with testData', () => {
    const action = {
      type: ActionType.CHANGE_SEARCH_BY,
      payload: testData,
    };
    const actionFn = changeSearchBy(state, action);
    expect(actionFn.get('searchBy')).toBe(testData);
  });

  it('should return State with testData', () => {
    const action = {
      type: ActionType.CHANGE_SORT_BY,
      payload: testData,
    };
    const actionFn = changeSortBy(state, action);
    expect(actionFn.get('sortBy')).toBe(testData);
  });
});
