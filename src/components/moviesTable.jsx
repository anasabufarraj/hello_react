import React from 'react';
import Like from './common/like';
import Table from './common/table';
import { Link } from 'react-router-dom';

class MoviesTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          path: 'title',
          label: 'Title',
          dynamic: (movie) => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>,
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
          dynamic: (movie) => <Like liked={movie.liked} onLike={() => this.props.onLike(movie)} />,
        },
        {
          path: 'delete',
          label: 'Handle',
          dynamic: (movie) => (
            <button onClick={() => this.props.onDelete(movie)} className="btn btn-outline-danger btn-sm">
              Delete
            </button>
          ),
        },
      ],
    };
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
