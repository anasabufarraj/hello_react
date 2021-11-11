//------------------------------------------------------------------------------
// Copyright 2021. Anas Abu Farraj.
//------------------------------------------------------------------------------
import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';

function Pagination(props) {
  let nodes = _.range(1, Math.ceil(props.itemsInTable / props.maxItemsInPage) + 1);

  return nodes.length === 1 ? null : (
    <nav>
      <p className="text-muted m-2">{props.itemsInTable ? '' : 'No match found.'}</p>
      <ul className="pagination mb-3">
        {nodes.map((page) => (
          <li
            style={{ cursor: 'pointer' }}
            className={props.activePage === page ? 'page-item active' : 'page-item'}
            key={page}
          >
            <Link to="#" className="page-link" onClick={() => props.onPageChange(page)}>
              {page}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
