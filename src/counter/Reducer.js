// @flow
import {DECREMENT, INCREMENT, FETCH_REQUEST_START, FETCH_REQUEST_FINISH} from "./Actions";
import {CounterState, MyAction} from "./Entities";

const initialState: CounterState = {num: 0, loadingCount: 0};

export default function reducer(state: CounterState = initialState, action: MyAction): CounterState {
  switch (action.type) {
    case INCREMENT: {
      if (!action.amount) return state;
      return Object.assign({}, state, {num: state.num + action.amount});
    }
    case DECREMENT: {
      if (!action.amount) return state;
      return Object.assign({}, state, {num: state.num - action.amount});
    }
    case FETCH_REQUEST_START: {
      const newCount = state.loadingCount + 1;
      return Object.assign({}, state, {loadingCount: newCount});
    }
    case FETCH_REQUEST_FINISH: {
      const newCount = state.loadingCount - 1;
      return Object.assign({}, state, {loadingCount: newCount});
    }
    default:
      return state
  }
}