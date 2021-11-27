//------------------------------------------------------------------------------
// Copyright 2021. Anas Abu Farraj.
//------------------------------------------------------------------------------
import React from 'react';
import Like from './common/like';
import Table from './common/table';
import { Link } from 'react-router-dom';
import auth from '../services/authService';

class MoviesTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          path: 'title',
          label: 'Title',
          link: (movie) => (
            <Link style={{ textDecoration: 'none' }} to={`/movies/${movie._id}`}>
              {movie.title}
            </Link>
          ),
        },
        {
          path: 'genre.name',
          label: 'Genre',
        },
        {
          path: 'dailyRentalRate',
          label: 'Rate',
        },
        {
          path: 'like',
          label: 'Like',
          button: (movie) => <Like liked={movie.liked} onLike={() => this.props.onLike(movie)} />,
        },
      ],
    };
  }

  componentDidMount() {
    const user = auth.getCurrentUserToken();
    const columns = this.state.columns;

    if (user && user.isAdmin) {
      columns.push({
        path: 'delete',
        label: 'Handle',
        button: (movie) => (
          <button onClick={() => this.props.onDelete(movie)} className="btn btn-outline-danger btn-sm">
            Delete
          </button>
        ),
      });
    }

    this.setState({ columns });
  }

  render() {
    return (
      <Table
        columns={this.state.columns}
        sortColumn={this.props.sortColumn}
        onSort={this.props.onSort}
        data={this.props.moviesInPage}
      />
    );
  }
}

export default MoviesTable;
