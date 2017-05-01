import assert from 'assert'
import reducer, {decrementAmount} from "../module"
import {CounterState, incrementAmount} from "../module"

describe('counter/module', () => {
  it('INCREMENT', () => {
    const state: CounterState = {num: 4}
    const result = reducer(state, incrementAmount(3))
    assert(result.num, state.num + 3)
  })

  it('DECREMENT', () => {
    const state: CounterState = {num: 4}
    const result = reducer(state, decrementAmount(3))
    assert(result.num, state.num - 3)
  })
})