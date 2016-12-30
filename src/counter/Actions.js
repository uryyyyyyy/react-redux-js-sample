export const INCREMENT: string = 'counter/increment';
export const DECREMENT: string = 'counter/decrement';

export class ActionDispatcher {
  dispatch: (action: any) => any;

  constructor(dispatch: (action: any) => any) {
    this.dispatch = dispatch
  }

  increment(amount: number) {
    this.dispatch({type: INCREMENT, amount: amount})
  }

  decrement(amount: number) {
    this.dispatch({type: DECREMENT, amount: amount})
  }
}