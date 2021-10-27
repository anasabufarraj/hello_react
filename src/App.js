import React from 'react';
import NavBar from './components/navbar';
import Footer from './components/footer';
import { Redirect, Route, Switch } from 'react-router-dom';
import Movies from './components/movies';
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/notFound';
import MovieDetails from './components/movieDetails';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="container-fluid fw-light m-3">
          <Switch>
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route exact path="/movies" component={Movies} />
            <Route path="/movies/:id" component={MovieDetails} />
            <Route path="/404" component={NotFound} />
            <Redirect to="404" />
          </Switch>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
