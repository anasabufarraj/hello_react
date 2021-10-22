import React, { Component } from 'react';
import TableHeader from './common/tableHeader';
import TableBody from './common/tableBody';
import Like from './common/like';

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
      <table className="table m-3">
        <TableHeader
          columns={this.state.columns}
          sortColumn={this.props.sortColumn}
          onSort={this.props.onSort}
        />
        <TableBody data={this.props.moviesInPage} columns={this.state.columns} />
      </table>
    );
  }
}

export default MoviesTable;
