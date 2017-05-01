// @flow
import React, {Component} from 'react'
import type {CounterState} from "./module"
import type {ActionDispatcher} from "./Container"

type Props = {
  value: CounterState;
  actions: ActionDispatcher;
};

export class Counter extends Component<void, Props, void> {

  render() {
    return (
      <div>
        <p>{`score: ${this.props.value.num}`}</p>
        <button onClick={() => this.props.actions.increment(3)}>Increment 3</button>
        <button onClick={() => this.props.actions.decrement(2)}>Decrement 2</button>
      </div>
    )
  }
}
