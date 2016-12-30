import assert from 'assert'
import React from 'react'
import {CounterState} from "../Entities";
import reducer from "../Reducer";
import {spy} from "sinon";
import {INCREMENT, DECREMENT, FETCH_REQUEST_START, FETCH_REQUEST_FINISH} from "../Actions";

describe('Reducer', function () {

  it('INCREMENT', () => {
    const state: CounterState = {num: 4, loadingCount: 0};
    const action = { type: INCREMENT, amount: 3};
    const result = reducer(state, action);
    assert(result.num === state.num + 3);
  });

  it('DECREMENT', () => {
    const state: CounterState = {num: 4, loadingCount: 0};
    const action = { type: DECREMENT, amount: 3};
    const result = reducer(state, action);
    assert(result.num === state.num - 3);
  });

  it('FETCH_REQUEST_START', () => {
    const state: CounterState = {num: 0, loadingCount: 0};
    const action = { type: FETCH_REQUEST_START};
    const result = reducer(state, action);
    assert(result.loadingCount === state.loadingCount + 1);
  });

  it('FETCH_REQUEST_FINISH', () => {
    const state: CounterState = {num: 0, loadingCount: 1};
    const action = { type: FETCH_REQUEST_FINISH};
    const result = reducer(state, action);
    assert(result.loadingCount === state.loadingCount - 1);
  });
});