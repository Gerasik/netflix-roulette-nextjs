import React from 'react';
import { shallow } from 'enzyme';

import ErrorPage from '.';

describe('<ErrorPage />', () => {
  it('should to be match snapshot  ', () => {
    const wrapper = shallow(<ErrorPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
