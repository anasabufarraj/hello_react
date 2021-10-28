import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';

function Pagination(props) {
  // NOTE: props are read-only arguments
  let nodes = _.range(1, Math.ceil(props.itemsInTable / props.maxItemsInPage) + 1);

  return nodes.length === 1 ? null : (
    <nav>
      <ul className="pagination m-3">
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
