import assert from 'assert'
import deepEqual from 'deep-equal'
import { ActionDispatcher, INCREMENT, FETCH_REQUEST_START, FETCH_REQUEST_FINISH } from '../Actions'
import fetchMock from 'fetch-mock'
import { spy } from 'sinon'

describe('ActionDispatcher', () => {
  beforeEach(() => {
    fetchMock.restore()
  })

  it('increment', () => {
    const spyCB:any = spy()
    const actions = new ActionDispatcher(spyCB)
    actions.increment(100)
    const calls = spyCB.getCalls()
    assert(calls.length === 1)
    assert(deepEqual(calls[0].args, [{ type: INCREMENT, amount: 100 }]))
  })

  it('fetchAmount success', async () => {
    fetchMock.get('/api/count', { body: { amount: 100 }, status: 200 })

    const spyCB:any = spy()
    const actions = new ActionDispatcher(spyCB)

    await actions.fetchAmount()

    const calls = spyCB.getCalls()
    assert(calls.length === 3)
    assert(deepEqual(calls[0].args, [{ type: FETCH_REQUEST_START }]))
    assert(deepEqual(calls[1].args, [{ type: INCREMENT, amount: 100 }]))
    assert(deepEqual(calls[2].args, [{ type: FETCH_REQUEST_FINISH }]))
  })

  it('fetchAmount fail', async () => {
    fetchMock.get('/api/count', { body: {}, status: 400 })

    const spyCB:any = spy()
    const actions = new ActionDispatcher(spyCB)

    await actions.fetchAmount()

    const calls = spyCB.getCalls()
    assert(calls.length === 2)
    assert(deepEqual(calls[0].args, [{ type: FETCH_REQUEST_START }]))
    assert(deepEqual(calls[1].args, [{ type: FETCH_REQUEST_FINISH }]))
  })
})
