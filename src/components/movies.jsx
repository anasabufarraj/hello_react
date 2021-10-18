import React, { Component } from 'react';
import { movies } from '../services/fakeMovieService';
import Like from './common/like';
import Pagination from './common/pagination';
import paginate from '../util/paginate';

class Movies extends Component {
  state = {
    movies: movies,
    maxItemsInPage: 5,
    activePage: 2,
  };

  constructor(props) {
    super(props);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

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

  handlePageChange(page) {
    this.setState({ activePage: page });
  }

  render() {
    if (this.state.movies.length === 0) {
      return <p className="m-2 my-2">You've no movies to show...</p>;
    }

    let moviesInPage = paginate(
      this.state.movies,
      this.state.activePage,
      this.state.maxItemsInPage
    );

    return (
      <React.Fragment>
        <p className="m-2 my-2">{this.manageEmptyState()}...</p>
        <table className="table m-3">
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
            {moviesInPage.map((movie) => (
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
        <p className="m-3">{moviesInPage.length} Movies</p>
        <Pagination
          itemsInTable={this.state.movies.length}
          maxItemsInPage={this.state.maxItemsInPage}
          activePage={this.state.activePage}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}

export default Movies;
