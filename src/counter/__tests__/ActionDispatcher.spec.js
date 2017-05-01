import assert from 'assert'
import fetchMock from 'fetch-mock'
import deepEqual from 'deep-equal'
import {incrementAmount, fetchRequestStart, fetchRequestFinish} from "../module"
import {ActionDispatcher} from "../Container"
import {spy} from "sinon"

describe('ActionDispatcher', () => {

  beforeEach(() => {
    fetchMock.restore()
  })

  it('increment', () => {
    const spyCB = spy()
    const actions = new ActionDispatcher(spyCB)
    actions.increment(100)
    const calls = spyCB.getCalls()
    assert(calls.length === 1)
    assert(deepEqual(calls[0].args, [incrementAmount(100)]))
  })

  it('fetchAmount success', async () => {
    fetchMock.get('/api/count', {body: {amount: 100}, status: 200})

    const spyCB = spy()
    const actions = new ActionDispatcher(spyCB)
    await actions.asyncIncrement()
    const calls = spyCB.getCalls()
    assert(calls.length === 3)
    assert(deepEqual(calls[0].args, [fetchRequestStart()]))
    assert(deepEqual(calls[1].args, [incrementAmount(100)]))
    assert(deepEqual(calls[2].args, [fetchRequestFinish()]))
  })

  it('fetchAmount fail', async () => {
    fetchMock.get('/api/count', {body: {}, status: 400})

    const spyCB = spy()
    const actions = new ActionDispatcher(spyCB)
    await actions.asyncIncrement()
    const calls = spyCB.getCalls()
    assert(calls.length === 2)
    assert(deepEqual(calls[0].args, [fetchRequestStart()]))
    assert(deepEqual(calls[1].args, [fetchRequestFinish()]))
  })
})