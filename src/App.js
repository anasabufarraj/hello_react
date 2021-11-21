//------------------------------------------------------------------------------
// Copyright 2021. Anas Abu Farraj.
//------------------------------------------------------------------------------
import React from 'react';
import NavBar from './components/navbar';
import { Redirect, Route, Switch } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import RegisterForm from './components/registerForm';
import LoginForm from './components/loginForm';
import MovieForm from './components/movieForm';
import Movies from './components/movies';
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/notFound';
import Footer from './components/footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  componentDidMount() {
    const jwt = localStorage.getItem('token');
    const user = jwtDecode(jwt);
    this.setState({ user });
  }

  render() {
    return (
      <React.Fragment>
        <ToastContainer limit={3} />
        <NavBar userNeme={this.state.user.name} />
        <div className="bg-primary text-white">
          <p className="text-end fw-light px-3 py-2">Hello, {this.state.user.name}</p>
        </div>
        <div className="container fw-light my-4">
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect exact from="/" to="/movies" />
            <Redirect to="not-found" />
          </Switch>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
