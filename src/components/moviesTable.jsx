import React, { Component } from 'react';
import TableHeader from './common/tableHeader';
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
        path: 'numberInStock',
        label: 'Stock',
      },
      {
        path: 'dailyRentalRate',
        label: 'Rate',
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
        {/*<thead>*/}
        {/*  <tr>*/}
        {/*    <th style={{ cursor: 'pointer' }} onClick={() => this.raiseSort('title')}>*/}
        {/*      Title{' '}*/}
        {/*      <i className={this.props.sortColumn.order === 'asc' ? 'fa fa-caret-down' : 'fa fa-caret-up'}>*/}
        {/*        &nbsp;*/}
        {/*      </i>*/}
        {/*    </th>*/}
        {/*    <th style={{ cursor: 'pointer' }} onClick={() => this.raiseSort('genre.name')}>*/}
        {/*      Genre{' '}*/}
        {/*      <i className={this.props.sortColumn.order === 'asc' ? 'fa fa-caret-down' : 'fa fa-caret-up'}>*/}
        {/*        &nbsp;*/}
        {/*      </i>*/}
        {/*    </th>*/}
        {/*    <th>Rate</th>*/}
        {/*    <th>Like</th>*/}
        {/*    <th>Delete</th>*/}
        {/*  </tr>*/}
        {/*</thead>*/}
        <tbody>
          {this.props.moviesInPage.map((movie) => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like liked={movie.liked} onLike={() => this.props.onLike(movie)} />
              </td>
              <td>
                <button onClick={() => this.props.onDelete(movie)} className="btn btn-danger btn-sm">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default MoviesTable;
