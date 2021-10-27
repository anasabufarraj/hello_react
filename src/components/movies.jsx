import React from 'react';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import Pagination from './common/pagination';
import paginate from '../util/paginate';
import MoviesTable from './moviesTable';
import ListGroup from './common/ListGroup';
import _ from 'lodash';

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // NOTE: cannot mutate state directly
      movies: [],
      genres: [],
      maxItemsInPage: 4,
      activePage: 1,
      sortColumn: { path: 'title', order: 'asc' },
    };

    this.handleMovieDelete = this.handleMovieDelete.bind(this);
    this.handleMovieLike = this.handleMovieLike.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleGenreSelect = this.handleGenreSelect.bind(this);
    this.handleSorting = this.handleSorting.bind(this);
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

  handleSorting(path) {
    this.setState({ sortColumn: path });
  }

  handleData() {
    // DOC: 1) Filtering movies, excluding the 'All Genres' which id is empty string.
    let filteredMovies =
      this.state.selectedGenre && this.state.selectedGenre._id !== ''
        ? this.state.movies.filter((_m) => _m.genre._id === this.state.selectedGenre._id)
        : this.state.movies;

    // DOC: 2) Sorting filtered movies, then paginate them.
    let sortedMovies = _.orderBy(filteredMovies, [this.state.sortColumn.path], [this.state.sortColumn.order]);
    let moviesInPage = paginate(sortedMovies, this.state.activePage, this.state.maxItemsInPage);

    return { filteredMovies, moviesInPage };
  }

  render() {
    let data = this.handleData();

    return this.state.movies.length === 0 ? (
      <p className="text-center mt-5 fs-5 fw-light">You've no content to show!</p>
    ) : (
      <div className="row">
        <div className="col-5">
          <ListGroup
            items={this.state.genres}
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className="col">
          <p className="m-3 fw-bold">
            {data.filteredMovies.length === 1
              ? `Showing ${data.filteredMovies.length} Movie`
              : `Showing ${data.filteredMovies.length} Movies`}
            ...
          </p>
          <MoviesTable
            moviesInPage={data.moviesInPage}
            onDelete={this.handleMovieDelete}
            onLike={this.handleMovieLike}
            onSort={this.handleSorting}
            sortColumn={this.state.sortColumn}
          />
          <Pagination
            itemsInTable={data.filteredMovies.length}
            maxItemsInPage={this.state.maxItemsInPage}
            activePage={this.state.activePage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
