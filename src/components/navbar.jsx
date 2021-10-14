import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="http://localhost:3000/">
            Home
          </a>
        </div>
      </nav>
    );
  }
}

export default NavBar;
