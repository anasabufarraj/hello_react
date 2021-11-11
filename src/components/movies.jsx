//------------------------------------------------------------------------------
// Copyright 2021. Anas Abu Farraj.
//------------------------------------------------------------------------------
import React from 'react';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import Pagination from './common/pagination';
import paginate from '../util/paginate';
import MoviesTable from './moviesTable';
import ListGroup from './common/ListGroup';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import SearchBox from './common/searchBox';

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      genres: [],
      maxItemsInPage: 4,
      searchQuery: '',
      selectedGenre: null,
      activePage: 1,
      sortColumn: { path: 'title', order: 'asc' },
    };

    this.handleMovieDelete = this.handleMovieDelete.bind(this);
    this.handleMovieLike = this.handleMovieLike.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleGenreSelect = this.handleGenreSelect.bind(this);
    this.handleSorting = this.handleSorting.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    let genres = [{ _id: '', name: 'All Genres' }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
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
    this.setState({ selectedGenre: genre, searchQuery: '', activePage: 1 });
  }

  handleSorting(path) {
    this.setState({ sortColumn: path });
  }

  handleData() {
    // DOC: 1) Filtering movies, excluding the newly created 'All Genres' which id is an empty string.
    let filteredMovies =
      this.state.selectedGenre && this.state.selectedGenre._id !== ''
        ? this.state.movies.filter((_m) => _m.genre._id === this.state.selectedGenre._id)
        : this.state.movies;

    // DOC: 2) Sorting filtered movies, then paginating.
    let sortedMovies = _.orderBy(filteredMovies, [this.state.sortColumn.path], [this.state.sortColumn.order]);
    let moviesInPage = paginate(sortedMovies, this.state.activePage, this.state.maxItemsInPage);

    return { filteredMovies, moviesInPage };
  }

  handleSearch(query) {
    // DOC: Reset genre filter on search and view all found matches
    let userInput = query;
    let found = getMovies().filter((_m) => _m.title.toLowerCase().includes(userInput.toLowerCase()));

    if (found && found.length !== 0) {
      this.setState({ movies: found, searchQuery: query, selectedGenre: null, activePage: 1 });
    } else {
      this.setState({ movies: getMovies(), searchQuery: query });
    }
  }

  render() {
    let data = this.handleData();

    return getMovies().length === 0 ? (
      <p className="lead text-center text-muted">You've no content to show!</p>
    ) : (
      <div className="row">
        <div className="col-6">
          <ListGroup
            items={this.state.genres}
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
          <Link to="/movies/new" className="btn btn-primary d-grid g-1 mb-3">
            Add Movie
          </Link>
        </div>
        <div className="col">
          <p className="fw-normal">
            {data.filteredMovies.length === 1
              ? `Showing ${data.filteredMovies.length} Movie`
              : `Showing ${data.filteredMovies.length} Movies`}
            ...
          </p>
          <SearchBox value={this.state.searchQuery} onChange={this.handleSearch} />
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
