import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
    // tags: ['tag 1', 'tag 2', 'tag 3'],
  };

  constructor(props) {
    super(props);
    this.incrementCounter = this.incrementCounter.bind(this);
  }

  incrementCounter(id) {
    console.log(id);
    this.setState({ count: this.state.count + 1 });
  }

  // manageEmptyState() {
  //   if (this.state.tags.length) {
  //     return this.state.tags.map((tag) => <li key={tag}>{tag}</li>);
  //   }
  //   return <span>You have no tags!</span>;
  // }

  setCounterText() {
    let { count } = this.state; // destructuring assignment
    return count === 0 ? <span>Zero</span> : count;
  }

  setBadgeColor() {
    return this.state.count === 0 ? 'bg-warning' : 'bg-primary';
  }

  render() {
    return (
      <div>
        <button onClick={() => this.incrementCounter(2)} className="btn btn-secondary btn-sm m-1">
          Increment
        </button>
        <span className={`badge m-2 ${this.setBadgeColor()}`}>{this.setCounterText()}</span>
        {/*<ul>{this.manageEmptyState()}</ul>*/}
      </div>
    );
  }
}

export default Counter;
