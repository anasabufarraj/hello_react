import React, { Component } from 'react';

class Counter extends Component {
  componentWillUnmount() {
    // TODO: Remove function for production
    console.log('Unmount - Counter');
  }

  setCounterText() {
    let { value } = this.props.counter;
    return value === 0 ? <span>0</span> : value;
  }

  setBadgeColor() {
    return this.props.counter.value === 0 ? 'bg-warning' : 'bg-primary';
  }

  setDisabled() {
    return this.props.counter.value === 0;
  }

  render() {
    return (
      <div className="m-2">
        <div className="row align-items-center">
          <div className="col-1">
            <span className="m-3">{this.props.counter.id}</span>
          </div>
          <div className="col-1">
            <span className={`badge p-2 ${this.setBadgeColor()}`}>
              {this.setCounterText()}
            </span>
          </div>
          <div className="col-5">
            <button onClick={this.props.onDelete} className="btn btn-danger">
              Delete
            </button>
            <button
              onClick={this.props.onDecrement}
              className="btn btn-secondary px-3 mx-1"
              disabled={this.setDisabled()}
            >
              -
            </button>
            <button onClick={this.props.onIncrement} className="btn btn-secondary px-3">
              +
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
