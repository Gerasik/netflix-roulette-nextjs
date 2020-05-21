import React from 'react';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import { testEmptyInitialState } from 'old/testData';

import App from 'old/App';

const middleware = [];
const mockStore = configureStore(middleware);

describe('Test initial App', () => {
  let store;
  let wrapper;

  beforeEach(() => {
    store = mockStore(testEmptyInitialState);
    wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  it('should render with initial state data', () => {
    expect(wrapper.find('.logo').length).toBe(1);
  });
});
