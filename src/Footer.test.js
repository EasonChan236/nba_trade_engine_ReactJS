import React from 'react';
import expect from 'expect';
import { mount, shallow } from 'enzyme';
import Footer from './Footer';

const wrapper = shallow(<Footer />);

it('Test div length', () =>{
    expect(wrapper.find('div').length).toBe(2);
});

it('Test footer length', () =>{
    expect(wrapper.find('footer').length).toBe(1);
});

it('Test footer text', () =>{
    expect(wrapper.find('.text-center').text()).toEqual('2018 - Pengyu Chen, Ruitian Lin - CSE 134B, UCSD');
});
