// @flow
import { Counter } from './Counter'
import { connect } from 'react-redux'
import type { Dispatch } from 'redux'
import { ActionDispatcher } from './Actions'

export default connect(
  (store: any) => ({ value: store.counter }),
  (dispatch: Dispatch<any>) => ({ actions: new ActionDispatcher(dispatch) })
)(Counter)
