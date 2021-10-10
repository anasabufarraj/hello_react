import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
    tags: ['tag 1', 'tag 2', 'tag 3'],
  };

  render() {
    return (
      <React.Fragment>
        <span className={`badge m-2 ${this.setBadgeColor()}`}>{this.setCounterText()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        <ul>{this.emptyState()}</ul>
      </React.Fragment>
    );
  }

  emptyState() {
    if (this.state.tags.length) {
      return this.state.tags.map((tag) => <li key={this.randomId()}>{tag}</li>);
    }
    return <p>You have no tags!</p>;
  }

  randomId() {
    return Math.random();
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
