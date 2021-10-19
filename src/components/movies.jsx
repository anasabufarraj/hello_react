import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import Like from './common/like';
import Pagination from './common/pagination';
import ListGroup from './common/ListGroup';
import paginate from '../util/paginate';

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    maxItemsInPage: 4,
    activePage: 1,
  };

  constructor(props) {
    super(props);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleGenreSelect = this.handleGenreSelect.bind(this);
  }

  componentDidMount() {
    // Get from server in real-world application
    this.setState({ movies: getMovies(), genres: getGenres() });
  }

  deleteMovie(movie) {
    let movies = this.state.movies.filter((_m) => _m._id !== movie._id);
    this.setState({ movies });
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

  handleGenreSelect(genre = null) {
    // DOC: Default argument is null, returns all items if no argument provided for 'All Genres'.
    this.setState({ selectedGenre: genre });
  }

  render() {
    if (this.state.movies.length === 0) {
      return <p className="m-2 my-2">You've no movies to show...</p>;
    }

    // DOC: Filtering movies before paginating
    let filteredMovies = this.state.selectedGenre
      ? this.state.movies.filter((_m) => _m.genre.name === this.state.selectedGenre.name)
      : this.state.movies;

    // DOC: Paginate filtered movies
    let moviesInPage = paginate(
      filteredMovies,
      this.state.activePage,
      this.state.maxItemsInPage
    );

    return (
      <div className="container">
        <div className="row">
          <div className="col-5">
            <ListGroup
              items={this.state.genres}
              selectedItem={this.state.selectedGenre}
              onItemSelect={this.handleGenreSelect}
            />
          </div>
          <div className="col">
            <p className="m-3">
              {filteredMovies.length === 1
                ? `Showing ${filteredMovies.length} Movie`
                : `Showing ${filteredMovies.length} Movies`}
              ...
            </p>
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
            <Pagination
              itemsInTable={filteredMovies.length}
              maxItemsInPage={this.state.maxItemsInPage}
              activePage={this.state.activePage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Movies;
