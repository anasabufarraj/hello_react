//------------------------------------------------------------------------------
// Copyright 2021. Anas Abu Farraj.
//------------------------------------------------------------------------------
import React from 'react';
import Counter from './counter';

class Counters extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    if (this.props !== prevProps) {
      console.log('Properties did changed - Counters');
    }
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={this.props.onReset} className="btn btn-outline-danger m-4">
          Reset Quantities
        </button>
        <button onClick={this.props.onAdd} className="btn btn-outline-danger">
          Add Counter
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
