/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import { shallow } from 'enzyme';
import Immutable from 'immutable';

import { testMovie1, testMovie2, testMovieResponse } from 'mock';
import MovieCard from 'components/MovieCard';
import Body from './index';

const testList = {
  data: Immutable.fromJS([testMovie1, testMovie2]),
  total: 2,
  sortBy: 'release_date',
};

describe('<Body />', () => {
  const wrapper = shallow(
    <Body
      moviesData={testList}
      setStartData={() => ({ type: 'string', payload: testMovieResponse })}
      changeSortBy={() => ({ type: 'string', payload: 'testMovieResponse' })}
    />
  );

  wrapper.find('.sort-rating').simulate('click');
  wrapper.find('.sort-release').simulate('click');

  it('should render with test data', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should be two MovieCard component', () => {
    expect(wrapper.find(MovieCard).length).toBe(2);
  });

  it('right props first MovieCard component', () => {
    expect(wrapper.find(MovieCard).get(0).props.data).toBe(testList.data.get(0));
  });
});

describe('<Body /> test empty data', () => {
  const wrapper = shallow(
    <Body
      moviesData={{ ...testList, total: 0 }}
      setStartData={() => ({ type: 'string', payload: testMovieResponse })}
      changeSortBy={() => ({ type: 'string', payload: 'testMovieResponse' })}
    />
  );

  it('should render with test data', () => {
    expect(wrapper.find('.movie-empty-result').length).toBe(1);
  });
});
