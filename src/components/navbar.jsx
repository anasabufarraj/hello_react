// Stateless functional component
function NavBar(props) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="http://localhost:3000/">
          MENU
        </a>
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-light" type="submit">
            Search
          </button>
        </form>
        <span className="text-light">
          <span className="badge bg-danger">
            {props.items} {props.items === 1 ? 'Item' : 'Items'}
          </span>
        </span>
      </div>
    </nav>
  );
}

export default NavBar;
