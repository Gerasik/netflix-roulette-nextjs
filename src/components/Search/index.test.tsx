import React from 'react';
import { mount } from 'enzyme';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';

import { testSearchReducerData, testMovieResponse } from 'mock';
import Search from '.';

const history = createBrowserHistory();
const searchComponent = (
  <Router history={history}>
    <Search
      searchData={testSearchReducerData}
      changeSearchString={() => ({ type: 'string', payload: 'testMovieResponse' })}
      changeSearchBy={() => ({ type: 'string', payload: 'testMovieResponse' })}
      setStartData={() => ({ type: 'string', payload: testMovieResponse })}
    />
  </Router>
);

it('render correctly date component', () => {
  const wrapper = mount(searchComponent);
  wrapper.find('.search-button').simulate('click');
  wrapper.find('.by-title').simulate('click');
  wrapper.find('.by-genre').simulate('click');
  wrapper.find('.search-text').simulate('change', { target: { value: 'string' } });
  expect(wrapper).toMatchSnapshot();
});

describe('<Search />', () => {
  it('renders an `footer`', () => {
    const wrapper = mount(searchComponent);
    expect(wrapper.find('input').prop('placeholder')).toBe('Search');
  });
});
