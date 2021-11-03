//------------------------------------------------------------------------------
// Copyright 2021. Anas Abu Farraj.
//------------------------------------------------------------------------------
import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="nav-item navbar-brand" to="/">
          Movies
        </Link>
        <div className="navbar-collapse">
          <div className="navbar-nav">
            <Link className="nav-item nav-link" to="/customers">
              Customers
            </Link>
            <Link className="nav-item nav-link" to="/rentals">
              Rentals
            </Link>
            <Link className="nav-item nav-link" to="/login">
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
