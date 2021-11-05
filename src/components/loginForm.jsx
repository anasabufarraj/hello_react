//------------------------------------------------------------------------------
// Copyright 2021. Anas Abu Farraj.
//------------------------------------------------------------------------------
import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account: { username: '', password: '' },
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // username = React.createRef(); // TODO: Remove

  handleSubmit(e) {
    e.preventDefault(); // Prevent default form submission

    // console.log(this.username.current.value); // TODO: Remove
  }

  handleChange(e) {
    let account = this.state.account;
    account[e.currentTarget.name] = e.currentTarget.value; // Set to current target value of the event listener

    // console.log(account.username); // TODO: Remove
    // console.log(account.password); // TODO: Remove

    this.setState(account);
  }

  render() {
    return (
      <React.Fragment>
        <h2 className="mb-3">Log In</h2>
        <div className="row">
          <div className="col-8">
            <form onSubmit={this.handleSubmit}>
              <div className="mb-3">
                <label htmlFor="Username" className="form-label">
                  Username
                </label>
                <input
                  type="email"
                  /* ref={this.username} TODO: Remove */
                  value={this.state.account.username}
                  onChange={this.handleChange}
                  className="form-control"
                  id="Username"
                  name="username"
                  autoFocus={true}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  value={this.state.account.password}
                  onChange={this.handleChange}
                  className="form-control"
                  id="Password"
                  name="password"
                />
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
