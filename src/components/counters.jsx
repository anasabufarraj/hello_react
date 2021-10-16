import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  componentDidUpdate(prevProps, prevState) {
    // TODO: Remove function for production
    if (this.props !== prevProps) {
      console.log('Properties did changed - Counters');
    }
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={this.props.onReset} className="btn btn-outline-danger m-4">
          Reset Quantity
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onIncrement={() => this.props.onIncrement(counter)}
            onDecrement={() => this.props.onDecrement(counter)}
            onDelete={() => this.props.onDelete(counter.id)}
            counter={counter}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
