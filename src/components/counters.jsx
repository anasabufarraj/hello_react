import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 1 },
      { id: 3, value: 2 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
    ],
  };

  handleDelete(id) {
    let counters = this.state.counters.filter((_c) => _c.id !== id.id);
    this.setState({ counters });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={() => this.handleDelete(counter)}
            value={counter.value}
            id={counter.id}
            counter={counter}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
