import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
    ],
  };

  constructor(props) {
    super(props);
    this.handleReset = this.handleReset.bind(this);
  }

  handleDelete(id) {
    let counters = this.state.counters.filter((_c) => _c.id !== id.id);
    this.setState({ counters });
  }

  handleReset() {
    let counters = this.state.counters.map((_c) => {
      _c.value = 0;
      return _c;
    });
    this.setState({ counters });
  }

  handleIncrement(counter) {
    let counters = [...this.state.counters];
    let index = this.state.counters.indexOf(counter);
    counters[index].value++;
    this.setState({ counters });
  }

  render() {
    if (this.state.counters.length === 0) {
      return <div className="text-secondary m-4">You have no counters!</div>;
    }
    return (
      <React.Fragment>
        <button onClick={this.handleReset} className="btn btn-outline-danger m-4">
          Reset Quantity
        </button>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={() => this.handleDelete(counter)}
            onIncrement={() => this.handleIncrement(counter)}
            counter={counter}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
