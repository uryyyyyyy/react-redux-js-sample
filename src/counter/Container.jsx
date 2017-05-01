// @flow
import {Counter} from "./Counter"
import {connect} from "react-redux"
import {decrementAmount, incrementAmount, fetchRequestStart, fetchRequestFinish} from "./module"
import type {Dispatch} from "redux"
import type {ReduxAction, ReduxState} from "../store"

export class ActionDispatcher {
  dispatch: Dispatch<ReduxAction>

  myHeaders: Object

  constructor(dispatch: Dispatch<ReduxAction>) {
    this.dispatch = dispatch
    this.myHeaders = {
      "Content-Type": "application/json",
      'Accept': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    }
  }

  increment(amount: number) {
    this.dispatch(incrementAmount(amount))
  }

  decrement(amount: number) {
    this.dispatch(decrementAmount(amount))
  }

  async asyncIncrement(): Promise<void> {
    this.dispatch(fetchRequestStart())

    try {
      const response: Response = await fetch('/api/count', {
        method: 'GET',
        headers: this.myHeaders
      })

      if (response.status === 200) { //2xx
        const json: {amount: number} = await response.json()
        this.dispatch(incrementAmount(json.amount))
      } else {
        throw new Error(`illegal status code: ${response.status}`)
      }
    } catch (err) {
      console.error(err)
    } finally {
      this.dispatch(fetchRequestFinish())
    }
  }
}

export default connect(
  (store: ReduxState) => ({value: store.counter}),
  (dispatch: Dispatch<ReduxAction>) => ({actions: new ActionDispatcher(dispatch)})
)(Counter);