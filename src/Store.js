// @flow
import counter from './counter/module'
import type {CounterActions, CounterState} from './counter/module'
import { createStore, combineReducers } from 'redux'

export default createStore(
  combineReducers({
    counter
  })
)

export type ReduxState = {
  counter : CounterState
}

export type ReduxAction = CounterActions