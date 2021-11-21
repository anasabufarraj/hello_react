//------------------------------------------------------------------------------
// Copyright 2021. Anas Abu Farraj.
//------------------------------------------------------------------------------
import React from 'react';
import Form from './common/form';
import Joi from 'joi-browser';
import { login } from '../services/authService';
import { toast } from 'react-toastify';
import config from '../config.json';

class LoginForm extends Form {
  constructor(props) {
    super(props);
    this.state = {
      data: { username: '', password: '' },
      errors: {},
    };
  }

  schema = {
    options: { abortEarly: false },
    username: Joi.string().required().label('Username'),
    password: Joi.string().required().label('Password'),
  };

  async handleFormSubmitToServer() {
    // DOC: Login the user and store the returned login token in browser's localStorage session.
    try {
      const { data: JWT } = await login(this.state.data);
      localStorage.setItem('token', JWT);
      this.props.history.push('/');
    } catch (err) {
      if (err.response && err.response.status === 400) {
        toast.error('Wrong username or password!', config.toastOptions);
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <h2 className="mb-3">Log In</h2>
        <div className="row">
          <div className="col-8">
            <form onSubmit={this.handleFormSubmit}>
              {this.renderInput('Username', 'text', 'username', true)}
              {this.renderInput('Password', 'password', 'password')}
              {this.renderSubmitButton('Login')}
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default LoginForm;
