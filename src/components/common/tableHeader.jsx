import React, { Component } from 'react';

class TableHeader extends Component {
  raiseSort(column) {
    let sortColumn = this.props.sortColumn;
    if (sortColumn.column === column) {
      sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc';
    } else {
      sortColumn.column = column;
      sortColumn.order = 'asc';
    }

    this.props.onSort(sortColumn);
  }

  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((column) => (
            <th style={{ cursor: 'pointer' }} key={column.path} onClick={() => this.raiseSort(column.path)}>
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
