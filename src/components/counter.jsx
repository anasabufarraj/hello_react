//------------------------------------------------------------------------------
// Copyright 2021. Anas Abu Farraj.
//------------------------------------------------------------------------------
import React from 'react';

class Counter extends React.Component {
  componentWillUnmount() {
    console.log('Unmount - Counter');
  }

  setCounterText() {
    const { value } = this.props.counter;
    return value === 0 ? 'Zero' : value;
  }

  setBadgeColor() {
    return this.props.counter.value === 0 ? 'bg-warning' : 'bg-primary';
  }

  render() {
    return (
      <div className="m-2">
        <div className="row align-items-center">
          <div className="col-1">
            <span className="m-3">{this.props.counter.id}</span>
          </div>
          <div className="col-1">
            <span className={`badge p-2 ${this.setBadgeColor()}`}>{this.setCounterText()}</span>
          </div>
          <div className="col">
            <button onClick={this.props.onDelete} className="btn btn-danger mx-2">
              Delete
            </button>
            <button
              onClick={this.props.onDecrement}
              className="btn btn-secondary"
              disabled={this.props.counter.value === 0}
            >
              -
            </button>
            <button onClick={this.props.onIncrement} className="btn btn-secondary mx-1">
              +
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
