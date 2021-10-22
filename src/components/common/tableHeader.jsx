import React, { Component } from 'react';

class TableHeader extends Component {
  raiseSort(path) {
    let sortColumn = this.props.sortColumn;
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc';
    } else {
      sortColumn.path = path;
      sortColumn.order = 'asc';
    }

    this.props.onSort(sortColumn);
  }

  renderIcon(column) {
    if (!column.content) {
      if (this.props.sortColumn.path === column.path) {
        return this.props.sortColumn.order === 'asc' ? (
          <i className="fa fa-caret-down">&nbsp;</i>
        ) : (
          <i className="fa fa-caret-up">&nbsp;</i>
        );
      }
    }
  }

  renderCursor(column) {
    if (!column.content) {
      return { cursor: 'pointer' };
    }
  }

  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((column) => (
            <th
              style={this.renderCursor(column)}
              key={column.path}
              onClick={() => this.raiseSort(column.path)}
            >
              {column.label} {this.renderIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
