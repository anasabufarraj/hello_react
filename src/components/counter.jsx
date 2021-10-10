import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
    tags: ['tag 1', 'tag 2', 'tag 3'],
  };

  constructor(props) {
    super(props);
    this.incrementCounter = this.incrementCounter.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.incrementCounter(2)} className="btn btn-secondary btn-sm m-1">
          +
        </button>
        <span className={`badge m-2 ${this.setBadgeColor()}`}>{this.setCounterText()}</span>
        <ul>{this.emptyState()}</ul>
      </React.Fragment>
    );
  }

  incrementCounter(id) {
    console.log(id);
    this.setState({ count: this.state.count + 1 });
  }

  emptyState() {
    if (this.state.tags.length) {
      return this.state.tags.map((tag) => <li key={this.randomId()}>{tag}</li>);
    }
    return <span>You have no tags!</span>;
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
