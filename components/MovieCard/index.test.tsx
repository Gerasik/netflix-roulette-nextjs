/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import { shallow } from 'enzyme';
import Immutable from 'immutable';

import { MovieMap } from 'models';
import MovieCard from './index';

describe('<MovieCard />', () => {
  it('should render with test data', () => {
    const testData: MovieMap = Immutable.fromJS({
      id: 45,
      title: 'test movie',
      tagline: 'test',
      vote_average: 55,
      vote_count: 66,
      release_date: '08081992',
      poster_path: '/movie_url/image.jpg',
      overview: 'ove',
      budget: 54545,
      revenue: 5454,
      runtime: 5454,
      genres: ['drama', 'sitcom', 'drama'],
    });
    const wrapper = shallow(<MovieCard data={testData} />);
    expect(wrapper).toMatchSnapshot();
  });
});
