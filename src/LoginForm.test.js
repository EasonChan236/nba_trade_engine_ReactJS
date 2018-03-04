import React from 'react';
import expect from 'expect';
import { mount, shallow } from 'enzyme';
import LoginForm from './LoginForm';

it('Test header', () =>{
    const wrapper = shallow(<LoginForm />);
    expect(wrapper.find('h1').text()).toEqual('Login');
});

it('Test Field length', () =>{
    const wrapper = shallow(<LoginForm />);
    expect(wrapper.find('Field').length).toBe(1);
});