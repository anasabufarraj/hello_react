//------------------------------------------------------------------------------
// Copyright 2021. Anas Abu Farraj.
//------------------------------------------------------------------------------
import React from 'react';
import NavBar from './components/navbar';
import { Redirect, Route, Switch } from 'react-router-dom';
import RegisterForm from './components/registerForm';
import LoginForm from './components/loginForm';
import MovieAddForm from './components/movieAddForm';
import MovieEditForm from './components/movieEditForm';
import Movies from './components/movies';
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/notFound';
import Footer from './components/footer';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="container-fluid fw-light m-4">
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/movies/new" component={MovieAddForm} />
            <Route path="/movies/:id" component={MovieEditForm} />
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
