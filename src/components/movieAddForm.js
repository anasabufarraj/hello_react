//------------------------------------------------------------------------------
// Copyright 2021. Anas Abu Farraj.
//------------------------------------------------------------------------------
import React from 'react';
import Joi from 'joi-browser';
import Form from './common/form';
import { getMovies, saveMovie } from '../services/fakeMovieService';

class MovieAddForm extends Form {
  constructor(props) {
    super(props);
    this.state = {
      movies: getMovies(),
      data: { title: '', genre: '', dailyRentalRate: '' },
      errors: {},
      schema: {
        options: { abortEarly: false },
        title: Joi.string().required().label('title'),
        genre: Joi.string().required().label('genre'),
        // numberInStock: Joi.number().min(0).required().label('stock'),
        dailyRentalRate: Joi.number().min(0).max(10).required().label('rate'),
      },
    };
  }

  handleFormSubmitToServer() {
    let movies = this.state.movies;
    saveMovie(this.state.data);
    this.setState(movies);
    // this.props.history.push('/movies'); // TODO: Uncomment when finish
  }

  render() {
    return (
      <React.Fragment>
        <h2 className="mb-3">Add Movie</h2>
        <div className="row">
          <div className="col-8">
            <form onSubmit={this.handleFormSubmit}>
              {this.renderInput('Title', 'text', 'title', true)}
              {this.renderInput('Genre', 'text', 'genre')}
              {/*{this.renderInput('Number in Stock', 'number', 'numberInStock')}*/}
              {this.renderInput('Rate', 'number', 'dailyRentalRate')}
              {this.renderSubmitButton('Create')}
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MovieAddForm;
