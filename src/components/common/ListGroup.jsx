//  TODO: [ ] Active list
//  TODO: [ ] Fix the fallback pagination issue

function ListGroup(props) {
  return (
    <div className="list-group m-3">
      <li
        style={{ cursor: 'pointer' }}
        className={
          props.activeList === -1
            ? 'list-group-item list-group-item-action active'
            : 'list-group-item list-group-item-action'
        }
        onClick={props.onGenresView}
      >
        All Genres
      </li>
      {props.genresNames.map((genre) => (
        <li
          style={{ cursor: 'pointer' }}
          key={genre._id}
          className="list-group-item list-group-item-action"
          onClick={() => props.onGenreSelect(genre.name)}
        >
          {genre.name}
        </li>
      ))}
    </div>
  );
}

export default ListGroup;
