import React, { Component } from 'react';
import _ from 'lodash';

class TableBody extends Component {
  renderCell(item, column) {
    if (column.content) {
      return column.content(item);
    }
    return _.get(item, column.path);
  }

  render() {
    return (
      <tbody>
        {this.props.data.map((item) => (
          <tr key={item._id}>
            {this.props.columns.map((column) => (
              <td key={column.path}>{this.renderCell(item, column)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
