import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Footer from './index';

it('render correctly date component', () => {
  const DateInputComponent = renderer.create(<Footer />).toJSON();
  expect(DateInputComponent).toMatchSnapshot();
});

describe('<Footer />', () => {
  it('renders an `footer`', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('footer').length).toBe(1);
  });
});
