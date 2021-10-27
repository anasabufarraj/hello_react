import React, { Component } from 'react';

class MovieDetails extends Component {
  handleSave() {
    // ...
  }

  render() {
    return (
      <div>
        <h1>Movie {this.props.match.params.id}</h1>
        <button className="btn btn-dark my-2" onClick={this.props.history.goBack}>
          Back
        </button>
        <button className="btn btn-primary mx-2" onClick={this.handleSave}>
          Save
        </button>
      </div>
    );
  }
}

export default MovieDetails;
