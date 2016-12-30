export const INCREMENT: string = 'counter/increment';
export const DECREMENT: string = 'counter/decrement';
export const FETCH_REQUEST_START = 'counter/fetch_request_start';
export const FETCH_REQUEST_FINISH = 'counter/fetch_request_finish';

const myHeaders = {
  "Content-Type": "application/json",
  'Accept': 'application/json',
  'X-Requested-With': 'XMLHttpRequest'
};

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

  async fetchAmount(): Promise<void> {
    this.dispatch({type: FETCH_REQUEST_START});

    try {
      const response: Response = await fetch('/api/count', {
        method: 'GET',
        headers: myHeaders,
        credentials: 'include'
      });

      if (response.status === 200) { //2xx
        const json: JsonObject = await response.json();
        this.dispatch({type: INCREMENT, amount: json.amount})
      } else {
        throw new Error(`illegal status code: ${response.status}`);
      }
    } catch (err) {
      console.error(err.message);
    } finally {
      this.dispatch({type: FETCH_REQUEST_FINISH})
    }
  }
}