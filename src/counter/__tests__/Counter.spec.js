import assert from 'assert';
import deepEqual from 'deep-equal';
import React from 'react';
import { shallow } from 'enzyme';
import {Counter} from '../Counter';
import {CounterState} from "../Entities";
import {spy} from "sinon";

describe('<Counter />', function () {

  it('rendering', () => {
    const actions:any = {};
    const state: CounterState = {num: 1, loadingCount: 1};
    const wrapper = shallow(<Counter value={state} actions={actions} />);
    assert(wrapper.find('p').at(0).prop('children') === 'loading');
    assert(wrapper.find('p').at(1).prop('children') === 'score: 1');
  });

  it('click increment button', () => {
    const spyCB = spy();
    const actions = {increment: spyCB};
    const state: CounterState = {num: 0, loadingCount: 0};
    const wrapper = shallow(<Counter value={state} actions={actions} />);
    wrapper.find('button').at(0).simulate('click');
    const calls = spyCB.getCalls();
    assert(calls.length === 1);
    assert(deepEqual(calls[0].args, [3]));
  });

  it('click decrement button', () => {
    const spyCB = spy();
    const actions = {decrement: spyCB};
    const state: CounterState = {num: 0, loadingCount: 0};
    const wrapper = shallow(<Counter value={state} actions={actions} />);
    wrapper.find('button').at(1).simulate('click');
    const calls = spyCB.getCalls();
    assert(calls.length === 1);
    assert(deepEqual(calls[0].args, [2]));
  });

  it('click fetchAmount button', () => {
    const spyCB = spy();
    const actions = {fetchAmount: spyCB};
    const state: CounterState = {num: 0, loadingCount: 0};
    const wrapper = shallow(<Counter value={state} actions={actions} />);
    wrapper.find('button').at(2).simulate('click');
    const calls = spyCB.getCalls();
    assert(calls.length === 1);
    assert(deepEqual(calls[0].args, []));
  });
});