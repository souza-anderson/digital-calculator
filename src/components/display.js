import React, { Component } from 'react';

class Display extends Component {
  render() {
    const cssDisplay =
      this.props.operation === 4 && this.props.zero ? 'display red' : 'display';
    return <div className={cssDisplay}>{this.props.value}</div>;
  }
}

export default Display;
