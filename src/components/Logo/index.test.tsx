import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Logo from './index';

it('Logo', () => {
  const DateInputComponent = renderer.create(<Logo />).toJSON();
  expect(DateInputComponent).toMatchSnapshot();
});

describe('<Footer />', () => {
  it('renders an `h1`', () => {
    const wrapper = shallow(<Logo />);
    expect(wrapper.find('h1').length).toBe(1);
  });

  it('renders an `h1`', () => {
    const wrapper = shallow(<Logo />);
    expect(wrapper.is('h1')).toBeTruthy();
  });
});
