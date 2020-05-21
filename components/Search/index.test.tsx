import React from 'react';
import { shallow } from 'enzyme';

import { testSearchReducerData, testMovieResponse } from 'testData';
import Search from '.';

const searchComponent = (
  <Search
    searchData={testSearchReducerData}
    changeSearchString={() => ({ type: 'string', payload: 'testMovieResponse' })}
    changeSearchBy={() => ({ type: 'string', payload: 'testMovieResponse' })}
    setData={() => ({ type: 'string', payload: testMovieResponse })}
  />
);

it('render correctly date component', () => {
  const wrapper = shallow(searchComponent);
  wrapper.find('.search-button').simulate('click');
  wrapper.find('.by-title').simulate('click');
  wrapper.find('.by-genre').simulate('click');
  wrapper.find('.search-text').simulate('change', { target: { value: 'string' } });
  expect(wrapper).toMatchSnapshot();
});

describe('<Search />', () => {
  it('renders an `footer`', () => {
    const wrapper = shallow(searchComponent);
    expect(wrapper.find('input').prop('placeholder')).toBe('Search');
  });
});
