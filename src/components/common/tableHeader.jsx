//------------------------------------------------------------------------------
// Copyright 2021. Anas Abu Farraj.
//------------------------------------------------------------------------------
import React from 'react';

class TableHeader extends React.Component {
  raiseSort(path, column) {
    if (!column.button) {
      const sortColumn = this.props.sortColumn;

      if (sortColumn.path === path) {
        sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc';
      } else {
        sortColumn.path = path;
        sortColumn.order = 'asc';
      }

      this.props.onSort(sortColumn);
    }
  }

  renderSortIcon(column) {
    if (!column.button && this.props.sortColumn.path === column.path) {
      return this.props.sortColumn.order === 'asc' ? (
        <i className="bi bi-caret-down-fill">&nbsp;</i>
      ) : (
        <i className="bi bi-caret-up-fill">&nbsp;</i>
      );
    }
  }

  renderCursor(column) {
    if (!column.button) return { cursor: 'pointer' };
    return { cursor: 'default' };
  }

  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((column) => (
            <th
              style={this.renderCursor(column)}
              key={column.path + column.label}
              onClick={() => this.raiseSort(column.path, column)}
            >
              {column.label} {this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
