import React from 'react';

export class Hello extends React.Component {
  render() {
    return <div>{this.props.content}</div>
  }
}