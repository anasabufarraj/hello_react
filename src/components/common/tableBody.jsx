//------------------------------------------------------------------------------
// Copyright 2021. Anas Abu Farraj.
//------------------------------------------------------------------------------
import React from 'react';
import _ from 'lodash';

class TableBody extends React.Component {
  renderCell(item, column) {
    if (column.button) {
      return column.button(item);
    } else if (column.link) {
      return column.link(item);
    }

    return _.get(item, column.path);
  }

  render() {
    return (
      <tbody>
        {this.props.data.map((item) => (
          <tr key={item._id}>
            {this.props.columns.map((column) => (
              <td key={item._id + column.path}>{this.renderCell(item, column)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
