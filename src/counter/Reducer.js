// @flow
import {DECREMENT, INCREMENT} from "./Actions";
import {CounterState, MyAction} from "./Entities";

const initialState: CounterState = {num: 0};

export default function reducer(state: CounterState = initialState, action: MyAction): CounterState {
  switch (action.type) {
    case INCREMENT:
      return {num: state.num + action.amount};
    case DECREMENT: {
      if (!action.amount) return state;
      const amount: number = action.amount;
      return {num: state.num - amount};
    }
    default:
      return state
  }
}