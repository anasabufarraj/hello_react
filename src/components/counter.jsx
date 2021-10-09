import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <React.Fragment>
        <span className={`badge m-2 ${this.setBadgeColor()}`}>
          {this.setCounterText()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </React.Fragment>
    );
  }

  setCounterText() {
    let { count } = this.state; // destructuring assignment
    return count === 0 ? <span>Nothing</span> : count;
  }

  setBadgeColor() {
    return this.state.count === 0 ? 'bg-warning' : 'bg-primary';
  }
}

export default Counter;
