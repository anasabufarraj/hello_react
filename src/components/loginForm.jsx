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
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleChange(e) {
    let account = this.state.account;
    account[e.currentTarget.name] = e.currentTarget.value; // Set to current target value of the event listener
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
                message={"We'll never share your information."}
                autofocus={true}
              />
              <Input
                label={'Password'}
                type={'password'}
                value={this.state.account.password}
                onChange={this.handleChange}
                name={'password'}
                message={'Must be 8-20 characters long.'}
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
