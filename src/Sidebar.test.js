import React from 'react';
import expect from 'expect';
import { mount, shallow } from 'enzyme';
import Sidebar from './Sidebar';

const wrapper = shallow(<Sidebar />);

it('Test div length', () =>{
    expect(wrapper.find('div').length).toBe(2);
});

it('Test h5 text', () =>{
    expect(wrapper.find('h5').text()).toEqual('Ed Stefanski');
});

it('Test unordered list length', () =>{
    expect(wrapper.find('ul').length).toBe(1);
});

it('Test list length', () =>{
    expect(wrapper.find('li').length).toBe(7);
});

it('Test span length', () =>{
    expect(wrapper.find('span').length).toBe(5);
});

it('Test #sidebar_Dashboard text', () =>{
    expect(wrapper.find('#sidebar_Dashboard').text()).toEqual('Dashboard');
});

it('Test #sidebar_IT text', () =>{
    expect(wrapper.find('#sidebar_IT').text()).toEqual('Initiate Trade');
});

it('Test #sidebar_TH text', () =>{
    expect(wrapper.find('#sidebar_TH').text()).toEqual('Trade History');
});

it('Test #sidebar_Roster text', () =>{
    expect(wrapper.find('#sidebar_Roster').text()).toEqual('Roster');
});

it('Test #sidebar_Pick text', () =>{
    expect(wrapper.find('#sidebar_Pick').text()).toEqual('Picks');
});
