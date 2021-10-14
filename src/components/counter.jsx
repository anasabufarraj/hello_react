import React, { Component } from 'react';

class Counter extends Component {
  setCounterText() {
    let { value } = this.props.counter;
    return value === 0 ? <span>0</span> : value;
  }

  setBadgeColor() {
    return this.props.counter.value === 0 ? 'bg-warning' : 'bg-primary';
  }

  render() {
    return (
      <div>
        <span className="p-2">{this.props.counter.id}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary"
        >
          Add
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger m-2"
        >
          Delete
        </button>
        <span className={`badge p-2 ${this.setBadgeColor()}`}>
          {this.setCounterText()}
        </span>
      </div>
    );
  }
}

export default Counter;
