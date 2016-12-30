// @flow
import React, {Component} from 'react';
import {CounterState} from "./Entities";
import {ActionDispatcher} from "./Actions";

type Props = {
  value: CounterState;
  actions: ActionDispatcher;
};

export class Counter extends Component<void, Props, void> {

  render() {
    const loading = (this.props.value.loadingCount === 0) ? null : <p>loading</p>;
    return (
      <div>
        {loading}
        <p>{`score: ${this.props.value.num}`}</p>
        <button onClick={() => this.props.actions.increment(3)}>Increment 3</button>
        <button onClick={() => this.props.actions.decrement(2)}>Decrement 2</button>
        <button onClick={() => this.props.actions.fetchAmount()}>async bonus 100</button>
      </div>
    );
  }
}