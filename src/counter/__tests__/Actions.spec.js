import assert from 'assert'
import {ActionTypes} from "../Entities";
import {ActionDispatcher, INCREMENT} from "../Actions";
import {spy} from "sinon";

describe('ActionDispatcher', () => {

  it('increment',  () => {
    const spyCB:any = spy();
    const actions = new ActionDispatcher(spyCB);
    actions.increment(100);
    const calls = spyCB.getCalls();
    assert(calls.length === 1);
    assert(JSON.stringify(calls[0].args) === JSON.stringify([{ type: INCREMENT, amount: 100 }]));
  });
});