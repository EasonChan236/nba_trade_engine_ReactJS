import React from 'react';
import expect from 'expect';
import { mount, shallow } from 'enzyme';
import Field from "./Field";


const wrapper = shallow(<Field />);

it('Test input length', () =>{
    expect(wrapper.find('input').length).toBe(3);
});

it('Test form length', () =>{
    expect(wrapper.find('form').length).toBe(1);
});

it('Test username input length', () =>{
    expect(wrapper.find('#username').length).toBe(1);
});

it('Test password input length', () =>{
    expect(wrapper.find('#password').length).toBe(1);
});

it('Test login_btn input length', () =>{
    expect(wrapper.find('#login_btn').length).toBe(1);
});

