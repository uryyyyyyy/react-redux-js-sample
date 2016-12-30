import assert from 'assert'
import {ActionTypes} from "../Entities";
import {ActionDispatcher, INCREMENT, FETCH_REQUEST_START, FETCH_REQUEST_FINISH} from "../Actions";
import fetchMock from 'fetch-mock';
import {spy} from "sinon";

describe('ActionDispatcher', () => {

  beforeEach(() => {
    fetchMock.restore();
  });

  it('increment',  () => {
    const spyCB:any = spy();
    const actions = new ActionDispatcher(spyCB);
    actions.increment(100);
    const calls = spyCB.getCalls();
    assert(calls.length === 1);
    assert(JSON.stringify(calls[0].args) === JSON.stringify([{ type: INCREMENT, amount: 100 }]));
  });

  it('fetchAmount success',  async () => {
    fetchMock.get('/api/count', {body: {amount: 100}, status: 200});

    const spyCB:any = spy();
    const actions = new ActionDispatcher(spyCB);

    await actions.fetchAmount();

    const calls = spyCB.getCalls();
    assert(calls.length === 3);
    assert(JSON.stringify(calls[0].args) === JSON.stringify([{ type: FETCH_REQUEST_START }]));
    assert(JSON.stringify(calls[1].args) === JSON.stringify([{ type: INCREMENT, amount: 100 }]));
    assert(JSON.stringify(calls[2].args) === JSON.stringify([{ type: FETCH_REQUEST_FINISH }]));
  });

  it('fetchAmount fail',  async () => {
    fetchMock.get('/api/count', {body: {}, status: 400});

    const spyCB:any = spy();
    const actions = new ActionDispatcher(spyCB);

    await actions.fetchAmount();

    const calls = spyCB.getCalls();
    assert(calls.length === 2);
    assert(JSON.stringify(calls[0].args) === JSON.stringify([{ type: FETCH_REQUEST_START }]));
    assert(JSON.stringify(calls[1].args) === JSON.stringify([{ type: FETCH_REQUEST_FINISH }]));
  });
});