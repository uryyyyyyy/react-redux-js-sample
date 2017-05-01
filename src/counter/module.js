// @flow
const INCREMENT_NAME = 'counter/increment'
type INCREMENT_TYPE = typeof INCREMENT_NAME
const DECREMENT_NAME = 'counter/decrement'
type DECREMENT_TYPE = typeof DECREMENT_NAME
const FETCH_REQUEST_START_NAME = 'counter/fetch_request_start'
type FETCH_REQUEST_START_TYPE = typeof FETCH_REQUEST_START_NAME
const FETCH_REQUEST_FINISH_NAME = 'counter/fetch_request_finish'
type FETCH_REQUEST_FINISH_TYPE = typeof FETCH_REQUEST_FINISH_NAME

interface IncrementAction {
  type: INCREMENT_TYPE;
  plusAmount: number;
}
export const incrementAmount = (amount: number): IncrementAction => ({
  type: INCREMENT_NAME,
  plusAmount: amount
})

interface DecrementAction {
  type: DECREMENT_TYPE;
  minusAmount: number;
}

export const decrementAmount = (amount: number): DecrementAction => ({
  type: DECREMENT_NAME,
  minusAmount: amount
})

interface FetchRequestStartAction {
  type: FETCH_REQUEST_START_TYPE;
}
export const fetchRequestStart = (): FetchRequestStartAction => ({
  type: FETCH_REQUEST_START_NAME
})

interface FetchRequestFinishAction {
  type: FETCH_REQUEST_FINISH_TYPE;
}
export const fetchRequestFinish = (): FetchRequestFinishAction => ({
  type: FETCH_REQUEST_FINISH_NAME
})

export interface CounterState {
  num: number,
  loadingCount: number
}

export type CounterActions = IncrementAction
  | DecrementAction
  | FetchRequestStartAction
  | FetchRequestFinishAction

const initialState:CounterState = {
  num: 0,
  loadingCount: 0
};

export default function reducer(state: CounterState = initialState, action: CounterActions): CounterState {
  switch (action.type) {
    case INCREMENT_NAME:
      return Object.assign({}, state, {num: state.num + action.plusAmount})
    case DECREMENT_NAME:
      return Object.assign({}, state, {num: state.num - action.minusAmount})
    case FETCH_REQUEST_START_NAME: {
      return Object.assign({}, state, {loadingCount: state.loadingCount + 1})
    }
    case FETCH_REQUEST_FINISH_NAME: {
      return Object.assign({}, state, {loadingCount: state.loadingCount - 1})
    }
    default:
      return state
  }
}
