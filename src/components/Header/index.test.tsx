import React from 'react';
import { mount } from 'enzyme';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';

import Header from './index';

const history = createBrowserHistory();
const component = (
  <Router history={history}>
    <Header>
      <div className="unique" />
    </Header>
  </Router>
);
describe('<Header />', () => {
  it('renders an `img`', () => {
    const wrapper = mount(component);
    expect(wrapper.find('img').length).toBe(1);
  });

  it('renders children when passed in', () => {
    const wrapper = mount(component);
    expect(wrapper.contains(<div className="unique" />)).toBeTruthy();
  });

  it('renders children when passed in', () => {
    const wrapper = mount(component);
    expect(wrapper).toMatchSnapshot();
  });
});
