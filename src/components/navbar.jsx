import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/movies">
          Movies
        </Link>
        <div className="navbar-collapse">
          <div className="navbar-nav">
            <Link className="nav-link" to="/customers">
              Customers
            </Link>
            <Link className="nav-link" to="/rentals">
              Rentals
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
