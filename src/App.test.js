import React from 'react';
import expect from 'expect';
import { mount, shallow } from 'enzyme';
import App from './App';

const wrapper = shallow(<App />);

it('Test div length', () =>{
    expect(wrapper.find('div').length).toBe(1);
});

it('Test Header length', () =>{
    expect(wrapper.find('Header').length).toBe(1);
});

it('Test Sidebar length', () =>{
    expect(wrapper.find('Sidebar').length).toBe(1);
});

it('Test Route length', () =>{
    expect(wrapper.find('Route').length).toBe(8);
});

it('Test Footer length', () =>{
    expect(wrapper.find('Footer').length).toBe(1);
});

it('Test section length', () =>{
    expect(wrapper.find('section').length).toBe(1);
});