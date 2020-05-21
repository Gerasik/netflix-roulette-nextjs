/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import { shallow, mount } from 'enzyme';

import ErrorBoundary from './index';

const Buggy: React.FunctionComponent<{ throwError?: boolean }> = ({ throwError = true }) => {
  if (throwError) {
    throw new Error('An error has occurred in Buggy component!');
  }

  return null;
};

describe('<ErrorBoundary /> test data', () => {
  const wrapper = shallow(
    <ErrorBoundary>
      <h1>Hello world</h1>
    </ErrorBoundary>
  );

  it('should render with test data', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<ErrorBoundary /> render error', () => {
  const wrapper = mount(
    <ErrorBoundary>
      <Buggy />
    </ErrorBoundary>
  );

  it('should render with test data', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
