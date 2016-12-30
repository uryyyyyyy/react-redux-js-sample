// @flow
export interface CounterState {
  num: number;
  loadingCount: number;
}

export interface MyAction {
  type: string;
  amount: ?number;
}

export interface JsonObject {
  amount: number
}