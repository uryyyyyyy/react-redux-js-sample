// @flow
import React, {Component} from 'react';

type Props = {
  content: string
};

type State = {
  count: number
};

export class Hello extends Component<void, Props, State> {
  state: State;

  constructor(props: Props, context: any) {
    super(props, context);
    this.state = {count: 0};
  }

  render() {
    return <div>{`${this.props.content} - ${this.state.count}`}</div>
  }
}