// @flow
import counter from './counter/Reducer'
import { createStore, combineReducers } from 'redux'

export default createStore(
  combineReducers({
    counter: counter
  })
);