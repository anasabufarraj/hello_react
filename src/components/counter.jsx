import React, { Component } from 'react';

class Counter extends Component {
  state = {
    value: this.props.value,
  };

  constructor(props) {
    super(props);
    this.incrementCounter = this.incrementCounter.bind(this);
  }

  incrementCounter() {
    this.setState({ value: this.state.value + 1 });
  }

  setCounterText() {
    let { value } = this.state;
    return value === 0 ? <span>0</span> : value;
  }

  setBadgeColor() {
    return this.state.value === 0 ? 'bg-warning' : 'bg-primary';
  }

  render() {
    return (
      <div>
        <span className="p-2">{this.props.id}</span>
        <button onClick={this.incrementCounter} className="btn btn-secondary">
          Increase
        </button>
        <button onClick={this.props.onDelete} className="btn btn-danger m-2">
          Delete
        </button>
        <span className={`badge p-2 ${this.setBadgeColor()}`}>{this.setCounterText()}</span>
      </div>
    );
  }
}

export default Counter;
