import _ from 'lodash';

function Pagination(props) {
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
            <a href="/#" className="page-link" onClick={() => props.onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
