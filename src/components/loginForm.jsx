//------------------------------------------------------------------------------
// Copyright 2021. Anas Abu Farraj.
//------------------------------------------------------------------------------
import React from 'react';
import Input from './common/input';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account: { username: '', password: '' },
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleValidation() {
    // DOC: Return error messages arrays.
    let errors = {};

    if (!this.state.account.username.trim()) {
      errors.username = 'Username is required.';
    }

    if (!this.state.account.password.trim()) {
      errors.password = 'Password is required.';
    }

    return Object.keys(errors).length === 0 ? 'Submitted' : errors; // FIXME: Remove 'Submitted'
  }

  handleSubmit(e) {
    // DOC: Prevent default for submission and handle validation error messages.
    e.preventDefault();
    let errors = this.handleValidation();

    console.log(errors); //TODO: Remove

    this.setState({ errors });
  }

  handleChange(e) {
    // DOC: Set an input element state using an event listener to the current target element.
    let account = this.state.account;
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState(account);
  }

  render() {
    return (
      <React.Fragment>
        <h2 className="mb-3">Log In</h2>
        <div className="row">
          <div className="col-8">
            <form onSubmit={this.handleSubmit}>
              <Input
                label={'Username'}
                type={'text'}
                value={this.state.account.username}
                onChange={this.handleChange}
                name={'username'}
                message={this.state.errors.username} // FIXME: is null if no error
                autofocus={true}
              />
              <Input
                label={'Password'}
                type={'password'}
                value={this.state.account.password}
                onChange={this.handleChange}
                name={'password'}
                message={this.state.errors.password} // FIXME: is null if no error
              />
              <button className="btn btn-primary">Login</button>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default LoginForm;
