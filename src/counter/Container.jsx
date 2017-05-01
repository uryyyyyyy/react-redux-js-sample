// @flow
import {Counter} from "./Counter"
import {connect} from "react-redux"
import {decrementAmount, incrementAmount} from "./module"
import type {Dispatch} from "redux"
import type {ReduxAction, ReduxState} from "../store"

export class ActionDispatcher {
  dispatch: Dispatch<ReduxAction>;

  constructor(dispatch: Dispatch<ReduxAction>) {
    this.dispatch = dispatch
  }

  increment(amount: number) {
    this.dispatch(incrementAmount(amount))
  }

  decrement(amount: number) {
    this.dispatch(decrementAmount(amount))
  }
}

export default connect(
  (store: ReduxState) => ({value: store.counter}),
  (dispatch: Dispatch<ReduxAction>) => ({actions: new ActionDispatcher(dispatch)})
)(Counter);