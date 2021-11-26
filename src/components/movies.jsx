//------------------------------------------------------------------------------
// Copyright 2021. Anas Abu Farraj.
//------------------------------------------------------------------------------
import React from 'react';
import { getMovies, deleteMovie } from '../services/movieService';
import { getGenres } from '../services/genreService';
import Pagination from './common/pagination';
import paginate from '../util/paginate';
import MoviesTable from './moviesTable';
import ListGroup from './common/ListGroup';
import SearchBox from './common/searchBox';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { toast } from 'react-toastify';
import auth from '../services/authService';
import config from '../config.json';

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      genres: [],
      maxItemsInPage: 4,
      activePage: 1,
      searchQuery: '',
      selectedGenre: null,
      sortColumn: { path: 'title', order: 'asc' },
    };

    this.handleMovieDelete = this.handleMovieDelete.bind(this);
    this.handleMovieLike = this.handleMovieLike.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleGenreSelect = this.handleGenreSelect.bind(this);
    this.handleSorting = this.handleSorting.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleClearSearch = this.handleClearSearch.bind(this);
  }

  async componentDidMount() {
    const { data } = await getGenres();
    const { data: movies } = await getMovies();
    const genres = [{ _id: '', name: 'All Genres' }, ...data];

    this.setState({ movies, genres });
  }

  async handleMovieDelete(movie) {
    const revert = this.state.movies;
    const movies = revert.filter((_m) => _m._id !== movie._id);
    this.setState({ movies });

    try {
      await deleteMovie(movie._id);
      toast.info('Successfully deleted!', config.toastOptions);
    } catch (err) {
      if (err.response && err.response.status === 404) {
        toast.error('Movie already deleted!', config.toastOptions);
      }

      this.setState({ movies: revert });
    }

    // DOC: Fallback to previous page if all items are deleted in the active page.
    const { maxItemsInPage, activePage } = this.state;
    const itemsInActivePage = paginate(movies, activePage, maxItemsInPage).length;

    if (!itemsInActivePage) {
      const fallback = activePage - 1;
      this.setState({ activePage: fallback });
    }
  }

  handleMovieLike(movie) {
    const movies = this.state.movies;
    const index = movies.indexOf(movie);

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
    let filteredMovies = this.state.movies;
    const { searchQuery, selectedGenre, sortColumn, activePage, maxItemsInPage } = this.state;

    // DOC: Filtering movies by genres or search box, excluding the 'All Genres' genre, which id is empty.
    if (searchQuery) {
      filteredMovies = filteredMovies.filter((_m) =>
        _m.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedGenre && selectedGenre._id !== '') {
      filteredMovies = filteredMovies.filter((_m) => _m.genre._id === selectedGenre._id);
    }

    // DOC: Sorting filtered movies.
    let sortedMovies = _.orderBy(filteredMovies, [sortColumn.path], [sortColumn.order]);

    if (sortColumn.path === 'title') {
      // DOC: Case-sensitive sorting if sorted by 'title' column.
      sortedMovies = _.orderBy(
        filteredMovies,
        [(filteredMovies) => filteredMovies.title.toLowerCase()],
        [sortColumn.order]
      );
    }

    // DOC: Paginating sorted movies.
    const moviesInPage = paginate(sortedMovies, activePage, maxItemsInPage);
    return { filteredMovies, moviesInPage };
  }

  handleSearch(query) {
    this.setState({ searchQuery: query, selectedGenre: null, activePage: 1 });
  }

  handleClearSearch() {
    this.setState({ searchQuery: '' });
  }

  render() {
    const data = this.handleData();
    const user = auth.getCurrentUserToken();

    return (
      <div className="row">
        <div className="col-6 col-md-3">
          <ListGroup
            items={this.state.genres}
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
          {user && (
            <Link to="/movies/new" className="btn btn-primary d-grid g-1 mb-3">
              Add Movie
            </Link>
          )}
        </div>
        <div className="col-12">
          <p className="fw-normal">
            {data.filteredMovies.length === 1
              ? `Showing ${data.filteredMovies.length} Movie in table`
              : `Showing ${data.filteredMovies.length} Movies in table`}
            ...
          </p>
          <SearchBox
            value={this.state.searchQuery}
            onChange={this.handleSearch}
            onClear={this.handleClearSearch}
          />
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
