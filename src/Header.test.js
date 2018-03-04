import React from 'react';
import expect from 'expect';
import { mount, shallow } from 'enzyme';
import Header from './Header';

const wrapper = shallow(<Header />);

it('Test div length', () =>{
    expect(wrapper.find('div').length).toBe(4);
});

it('Test header length', () =>{
    expect(wrapper.find('header').length).toBe(1);
});

it('Test logo text', () =>{
    expect(wrapper.find('.logo').text()).toEqual('76ers');
});

it('Test logout text', () =>{
    expect(wrapper.find('.logout').text()).toEqual('Logout');
});

it('Test unordered list length', () =>{
    expect(wrapper.find('ul').length).toBe(1);
});

it('Test list length', () =>{
    expect(wrapper.find('li').length).toBe(1);
});

it('Test anchord tag length', () =>{
    expect(wrapper.find('a').length).toBe(2);
});

