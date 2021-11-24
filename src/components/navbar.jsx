//------------------------------------------------------------------------------
// Copyright 2021. Anas Abu Farraj.
//------------------------------------------------------------------------------
import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar(props) {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <NavLink className="nav-item navbar-brand" to="/">
            Movies
          </NavLink>
          <div className="navbar-collapse">
            <div className="navbar-nav">
              <NavLink className="nav-item nav-link" to="/customers">
                Customers
              </NavLink>
              <NavLink className="nav-item nav-link" to="/rentals">
                Rentals
              </NavLink>
              {!props.user && (
                <React.Fragment>
                  <NavLink className="nav-item nav-link" to="/login">
                    Login
                  </NavLink>
                  <NavLink className="nav-item nav-link" to="/register">
                    Register
                  </NavLink>
                </React.Fragment>
              )}
              {props.user && (
                <NavLink className="nav-item nav-link" to="/logout">
                  Logout
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </nav>
      {props.user && (
        <div className="bg-primary">
          <div className="container text-end py-2">
            <NavLink className="nav-item nav-link text-white d-inline" to="/profile">
              {props.user.name} <i className="bi-person-circle ps-1" />
              {props.user.isAdmin ? ' Admin' : ''}
            </NavLink>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default NavBar;
