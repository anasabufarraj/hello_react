import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import Pagination from './common/pagination';
import ListGroup from './common/ListGroup';
import MoviesTable from './moviesTable';
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
    this.handleMovieDelete = this.handleMovieDelete.bind(this);
    this.handleMovieLike = this.handleMovieLike.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleGenreSelect = this.handleGenreSelect.bind(this);
  }

  componentDidMount() {
    let allGenres = [{ _id: '', name: 'All Genres' }, ...getGenres()];
    this.setState({ movies: getMovies(), genres: allGenres }); // Get from server
  }

  handleMovieDelete(movie) {
    let movies = this.state.movies.filter((_m) => _m._id !== movie._id);
    this.setState({ movies, activePage: 1 });
  }

  handleMovieLike(movie) {
    let movies = [...this.state.movies];
    let index = movies.indexOf(movie);
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  }

  handlePageChange(page) {
    this.setState({ activePage: page });
  }

  handleGenreSelect(genre) {
    // DOC: Returns all items if no argument passed. Use for 'All Genres' view.
    this.setState({ selectedGenre: genre, activePage: 1 });
  }

  handleSorting(column) {
    console.log(column);
  }

  render() {
    if (this.state.movies.length === 0) {
      return <p className="m-2 my-2">You've no movies to show...</p>;
    }

    // DOC: Filtering movies before paginating, excluding the 'All Genres' which id is ''.
    let filteredMovies =
      this.state.selectedGenre && this.state.selectedGenre._id !== ''
        ? this.state.movies.filter((_m) => _m.genre._id === this.state.selectedGenre._id)
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
          <div className="col-6">
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
            <MoviesTable
              movies={this.state.movies}
              moviesInPage={moviesInPage}
              onDelete={this.handleMovieDelete}
              onLike={this.handleMovieLike}
              onSort={this.handleSorting}
            />
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
