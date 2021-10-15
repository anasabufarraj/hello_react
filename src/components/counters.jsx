import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
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
            onDelete={() => this.props.onDelete(counter.id)}
            counter={counter}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
