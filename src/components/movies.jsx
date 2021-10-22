import { Component } from 'react';
import MoviesTable from './moviesTable';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import Pagination from './common/pagination';
import ListGroup from './common/ListGroup';
import paginate from '../util/paginate';
import _ from 'lodash';

class Movies extends Component {
  // MEMO: cannot mute component state directly
  state = {
    movies: [],
    genres: [],
    maxItemsInPage: 4,
    activePage: 1,
    sortColumn: { path: 'title', order: 'asc' },
  };

  constructor(props) {
    super(props);
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

  render() {
    if (this.state.movies.length === 0) {
      return <p className="m-2 my-2">You've no movies to show...</p>;
    }

    // DOC: 1) Filtering movies, excluding the 'All Genres' which id is empty string.
    let filteredMovies =
      this.state.selectedGenre && this.state.selectedGenre._id !== ''
        ? this.state.movies.filter((_m) => _m.genre._id === this.state.selectedGenre._id)
        : this.state.movies;

    // DOC: 2) Sorting filtered movies.
    let sortedMovies = _.orderBy(filteredMovies, [this.state.sortColumn.path], [this.state.sortColumn.order]);

    // DOC: 3) Paginate sorted movies.
    let moviesInPage = paginate(sortedMovies, this.state.activePage, this.state.maxItemsInPage);

    return (
      <div className="container fw-light">
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
              {filteredMovies.length === 1
                ? `Showing ${filteredMovies.length} Movie`
                : `Showing ${filteredMovies.length} Movies`}
              ...
            </p>
            <MoviesTable
              moviesInPage={moviesInPage}
              onDelete={this.handleMovieDelete}
              onLike={this.handleMovieLike}
              onSort={this.handleSorting}
              sortColumn={this.state.sortColumn}
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
