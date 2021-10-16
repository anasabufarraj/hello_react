import React, { Component } from 'react';
import { movies } from '../services/fakeMovieService';
import Like from './common/like';

class Movies extends Component {
  state = {
    movies: movies,
  };

  deleteMovie(movie) {
    let movies = this.state.movies.filter((_m) => _m._id !== movie._id);
    this.setState({ movies });
  }

  manageEmptyState() {
    return this.state.movies.length > 1
      ? `Showing ${this.state.movies.length} Movies`
      : `Showing ${this.state.movies.length} Movie`;
  }

  handleLike(movie) {
    let movies = [...this.state.movies];
    let index = movies.indexOf(movie);
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  }

  render() {
    if (this.state.movies.length === 0) {
      return <p className="m-2 my-2">You've no movies to show...</p>;
    }
    return (
      <React.Fragment>
        <p className="m-2 my-2">{this.manageEmptyState()}...</p>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Movie</th>
              <th scope="col">Genre</th>
              <th scope="col">In Stock</th>
              <th scope="col">Favourite</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>
                  <Like liked={movie.liked} onLike={() => this.handleLike(movie)} />
                </td>
                <td>
                  <button
                    onClick={() => this.deleteMovie(movie)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Movies;