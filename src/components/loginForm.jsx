//------------------------------------------------------------------------------
// Copyright 2021. Anas Abu Farraj.
//------------------------------------------------------------------------------
import React from 'react';

class LoginForm extends React.Component {
  handleSubmit(e) {
    e.preventDefault(); // Prevent default form submission.

    console.log('Submitted');
  }

  render() {
    return (
      <React.Fragment>
        <h2 className="mb-3">Log In</h2>
        <div className="row">
          <div className="col-8">
            <form onSubmit={this.handleSubmit}>
              <div className="mb-3">
                <label htmlFor="Email" className="form-label">
                  Email address
                </label>
                <input type="email" className="form-control" id="Email" aria-describedby="emailHelp" />
              </div>
              <div className="mb-3">
                <label htmlFor="Password" className="form-label">
                  Password
                </label>
                <input type="password" className="form-control" id="Password" />
              </div>
              <button className="btn btn-primary">Login</button>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default LoginForm;
