import React from 'react';
import { mount } from 'enzyme';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';

import { testMovieMap1, testMovieMap3 } from 'mock';
import Film from '.';

const history = createBrowserHistory();

describe('<Film />', () => {
  it('renders children when passed in', () => {
    const component = (
      <Router history={history}>
        <Film filmData={testMovieMap1} setFilmId={id => ({ type: 'string', payload: id })}>
          <div className="unique" />
        </Film>
      </Router>
    );
    const wrapper = mount(component);
    expect(wrapper).toMatchSnapshot();
  });

  it('expected image placeholder and 0 runtime ', () => {
    const component = (
      <Router history={history}>
        <Film filmData={testMovieMap3} setFilmId={id => ({ type: 'string', payload: id })}>
          <div className="unique" />
        </Film>
      </Router>
    );
    const wrapper = mount(component);
    expect(wrapper).toMatchSnapshot();
  });
});
