// @flow
const INCREMENT_NAME = 'counter/increment'
type INCREMENT_TYPE = typeof INCREMENT_NAME
const DECREMENT_NAME = 'counter/decrement'
type DECREMENT_TYPE = typeof DECREMENT_NAME

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

export interface CounterState {
  num: number
}

export type CounterActions = IncrementAction | DecrementAction

const initialState:CounterState = {num: 0};

export default function reducer(state: CounterState = initialState, action: CounterActions): CounterState {
  switch (action.type) {
    case INCREMENT_NAME:
      return {num: state.num + action.plusAmount}
    case DECREMENT_NAME:
      return {num: state.num - action.minusAmount}
    default:
      return state
  }
}
