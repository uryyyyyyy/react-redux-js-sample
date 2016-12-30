import assert from 'assert'
import React from 'react'
import {CounterState} from "../Entities";
import reducer from "../Reducer";
import {spy} from "sinon";
import {INCREMENT, DECREMENT} from "../Actions";

describe('Reducer', function () {

  it('INCREMENT', () => {
    const state: CounterState = {num: 4};
    const action = { type: INCREMENT, amount: 3};
    const result = reducer(state, action);
    assert(result.num === state.num + 3);
  });

  it('DECREMENT', () => {
    const state: CounterState = {num: 4};
    const action = { type: DECREMENT, amount: 3};
    const result = reducer(state, action);
    assert(result.num === state.num - 3);
  });
});