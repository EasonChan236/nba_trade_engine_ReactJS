import React from 'react';
import expect from 'expect';
import { mount, shallow } from 'enzyme';
import Roster from './Roster';

const wrapper = shallow(<Roster />);

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
    expect(wrapper.find('table').length).toBe(1);
});

it('Test thead length', () =>{
    expect(wrapper.find('thead').length).toBe(1);
});

it('Test tbody length', () =>{
    expect(wrapper.find('tbody').length).toBe(1);
});

it('Test h3 text', () =>{
    expect(wrapper.find('h3').text()).toEqual(' Roster');
});