import React from 'react';
import expect from 'expect';
import { mount, shallow } from 'enzyme';
import Pick from './Pick';

const wrapper = shallow(<Pick />);

it('Test div length', () =>{
    expect(wrapper.find('div').length).toBe(4);
});

it('Test Header length', () =>{
    expect(wrapper.find('Header').length).toBe(1);
});

it('Test Sidebar length', () =>{
    expect(wrapper.find('Sidebar').length).toBe(1);
});

it('Test Footer length', () =>{
    expect(wrapper.find('Footer').length).toBe(1);
});

it('Test table length', () =>{
    expect(wrapper.find('table').length).toBe(4);
});

it('Test thead length', () =>{
    expect(wrapper.find('thead').length).toBe(4);
});

it('Test tbody length', () =>{
    expect(wrapper.find('tbody').length).toBe(4);
});

it('Test h3 text', () =>{
    expect(wrapper.find('h3').text()).toEqual(' Picks');
});

it('Test h4 length', () =>{
    expect(wrapper.find('h4').length).toBe(4);
});

