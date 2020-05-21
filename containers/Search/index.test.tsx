/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';
import { mount } from 'enzyme';
import { REHYDRATE } from 'redux-persist/constants';

import { testSearchReducerData, testInitialState } from 'testData';
import searchReducer from './reducer';
import SearchContainer from '.';
import { changeSearchString, changeSearchBy, changeSortBy } from './actions';
import ActionType from './constants';

const middleware = [];
const mockStore = configureStore(middleware);

describe('Test dispatch action', () => {
  const store = mockStore(testInitialState);

  const testString = 'Hello';

  it('actions works right', () => {
    store.dispatch(changeSearchString(testString));
    store.dispatch(changeSearchBy(testString));
    store.dispatch(changeSortBy(testString));

    const actions = store.getActions();
    const expectedPayload = [
      { type: ActionType.CHANGE_SEARCH_STRING, payload: testString },
      { type: ActionType.CHANGE_SEARCH_BY, payload: testString },
      { type: ActionType.CHANGE_SORT_BY, payload: testString },
    ];

    expect(actions).toEqual(expectedPayload);
  });
});

describe('Test initial SearchContainer', () => {
  let store;
  let wrapper;

  beforeEach(() => {
    store = mockStore(testInitialState);
    wrapper = mount(
      <Provider store={store}>
        <SearchContainer />
      </Provider>
    );
  });

  it('should render with initial state data', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Test reducer', () => {
  it('should change search type', () => {
    const testData = 'hello';
    const reducerChange = searchReducer(fromJS(testSearchReducerData), changeSearchBy(testData));

    expect(reducerChange.get('searchBy')).toEqual(fromJS(testData));
  });

  it('should change sort type', () => {
    const testData = 'hello';
    const reducerChange = searchReducer(fromJS(testSearchReducerData), changeSortBy(testData));

    expect(reducerChange.get('sortBy')).toEqual(fromJS(testData));
  });

  it('should change search string', () => {
    const testData = 'hello';
    const reducerChange = searchReducer(
      fromJS(testSearchReducerData),
      changeSearchString(testData)
    );

    expect(reducerChange.get('searchString')).toEqual(fromJS(testData));
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

  it('should load initial state with unknown reducer', () => {
    const reducerChange = searchReducer(fromJS(testSearchReducerData), {
      type: 'unknown',
      payload: {},
    });
    expect(reducerChange).toEqual(fromJS(testSearchReducerData));
  });

  it('should load initial state with undefined state', () => {
    const reducerChange = searchReducer(undefined, {
      type: 'unknown',
      payload: {},
    });
    expect(reducerChange).toEqual(fromJS(testSearchReducerData));
  });
});
