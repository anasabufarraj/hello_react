import React, { Component } from 'react';
import { getMovies, deleteMovie } from '../services/fakeMovieService';

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  render() {
    return (
      <div className="container">
        <p className="m-2 my-2">{this.emptyState()}...</p>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Movie</th>
              <th scope="col">Genre</th>
              <th scope="col">In Stock</th>
              <th scope="col">Rate</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={this.randomId()}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={() => this.updateTable(movie._id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  emptyState() {
    if (this.state.movies.length === 0) {
      return `You've no movies to show`;
    }
    return this.state.movies.length > 1
      ? `Showing ${this.state.movies.length} Movies`
      : `Showing ${this.state.movies.length} Movie`;
  }

  updateTable(id) {
    this.setState(deleteMovie(id));
  }

  randomId() {
    return Math.random();
  }
}

export default Movies;
