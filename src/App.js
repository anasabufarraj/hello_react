import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';
import './App.css';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  constructor(props) {
    super(props);
    this.handleReset = this.handleReset.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleReset() {
    let counters = this.state.counters.map((_c) => {
      _c.value = 0;
      return _c;
    });
    this.setState({ counters });
  }

  handleAdd() {
    this.state.counters.push({ id: this.state.counters.slice(-1)[0].id + 1, value: 0 });
    this.setState(this.state.counters);
  }

  handleIncrement(counter) {
    let counters = [...this.state.counters];
    let index = counters.indexOf(counter);
    counters[index].value++;
    this.setState({ counters });
  }

  handleDecrement(counter) {
    let counters = [...this.state.counters];
    let index = counters.indexOf(counter);
    counters[index].value--;
    this.setState({ counters });
  }

  handleDelete(id) {
    let counters = this.state.counters.filter((_c) => _c.id !== id);
    this.setState({ counters });
  }

  handleEmptyState() {
    if (this.state.counters.length === 0) {
      return <p className="text-secondary mx-4">You have no counters to view</p>;
    }
  }

  render() {
    return (
      <React.Fragment>
        <NavBar items={this.state.counters.length} />
        <main className="container">
          <Counters
            onReset={this.handleReset}
            onAdd={this.handleAdd}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            counters={this.state.counters}
          />
          {this.handleEmptyState()}
        </main>
      </React.Fragment>
    );
  }
}

export default App;
