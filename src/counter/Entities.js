// @flow
export interface CounterState {
  num: number;
}

export interface MyAction {
  type: string;
  amount: ?number;
}
