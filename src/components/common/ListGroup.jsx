//------------------------------------------------------------------------------
// Copyright 2021. Anas Abu Farraj.
//------------------------------------------------------------------------------
import React from 'react';

class ListGroup extends React.Component {
  selectDefaultGenre(genre) {
    if (!this.props.selectedItem && genre.name === 'All Genres') {
      return 'list-group-item list-group-item-action active';
    }

    return genre === this.props.selectedItem
      ? 'list-group-item list-group-item-action active'
      : 'list-group-item list-group-item-action';
  }

  render() {
    return (
      <div className="list-group mb-3">
        {this.props.items.map((genre) => (
          <li
            style={{ cursor: 'pointer' }}
            key={genre._id}
            className={this.selectDefaultGenre(genre)}
            onClick={() => this.props.onItemSelect(genre)}
          >
            {genre.name}
          </li>
        ))}
      </div>
    );
  }
}

export default ListGroup;
