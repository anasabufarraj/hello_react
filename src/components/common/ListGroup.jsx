function ListGroup(props) {
  return (
    <div className="list-group m-3">
      {props.items.map((genre) => (
        <li
          style={{ cursor: 'pointer' }}
          key={genre._id}
          className={
            genre === props.selectedItem
              ? 'list-group-item list-group-item-action active'
              : 'list-group-item list-group-item-action'
          }
          onClick={() => props.onItemSelect(genre)}
        >
          {genre.name}
        </li>
      ))}
    </div>
  );
}

export default ListGroup;
