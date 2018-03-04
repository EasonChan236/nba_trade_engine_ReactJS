import React from 'react';
import expect from 'expect';
import { mount, shallow } from 'enzyme';
// import TestUtils from 'react-addons-test-utils';
import LoginForm from './LoginForm';

it('renders', () =>{
    const wrapper = shallow(<LoginForm />);
    expect(wrapper.find('h1').text()).toEqual('Login');
});