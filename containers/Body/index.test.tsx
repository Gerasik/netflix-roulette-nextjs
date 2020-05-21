/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';

import { testMovieResponse, testNextState, testInitialState } from 'testData';
import bodyReducer from './reducer';
import BodyContainer from '.';
import { setData } from './actions';
import ActionType from './constants';

const middleware = [];
const mockStore = configureStore(middleware);

describe('Test dispatch action', () => {
  const store = mockStore(testInitialState);

  it('action `setData`', () => {
    store.dispatch(setData(testMovieResponse));

    const actions = store.getActions();
    const expectedPayload = { type: ActionType.SET_DATA, payload: testMovieResponse };

    expect(actions).toEqual([expectedPayload]);
  });
});

describe('Test initial BodyContainer', () => {
  let store;
  let wrapper;

  beforeEach(() => {
    store = mockStore(testInitialState);
    wrapper = mount(
      <Provider store={store}>
        <BodyContainer />
      </Provider>
    );
  });

  it('should render with initial state data', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with next state data', () => {
    store.dispatch(setData(testMovieResponse));
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Test reducer', () => {
  // it('should return the initial state', () => {
  //   expect(bodyReducer(undefined, { type: 'unknown', payload: undefined })).toEqual(
  //     testInitialState
  //   );
  // });

  it('should return the state with movie response', () => {
    expect(bodyReducer(undefined, setData(testMovieResponse))).toEqual(testNextState);
  });
});
