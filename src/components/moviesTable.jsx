import { Component } from 'react';
import Like from './common/like';
import Table from './common/table';

class MoviesTable extends Component {
  state = {
    columns: [
      {
        path: 'title',
        label: 'Title',
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
        content: (movie) => <Like liked={movie.liked} onLike={() => this.props.onLike(movie)} />,
      },
      {
        path: 'delete',
        label: 'Handle',
        content: (movie) => (
          <button onClick={() => this.props.onDelete(movie)} className="btn btn-outline-danger btn-sm">
            Delete
          </button>
        ),
      },
    ],
  };

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
