import React from 'react';
import _ from 'lodash'; // or import lodash from 'lodash'

function Pagination(props) {
  let nodes = Math.ceil(props.itemsInTable / props.itemsInPage);
  let nodesArray = _.range(1, nodes + 1);

  return nodesArray.length === 1 ? null : (
    <nav>
      <ul className="pagination m-3">
        {nodesArray.map((page) => (
          <li
            style={{ cursor: 'pointer' }}
            className={`page-item ${props.currentPage === page ? 'active' : ''}`}
            key={page}
          >
            <a className="page-link" onClick={() => props.onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
