//------------------------------------------------------------------------------
// Copyright 2021. Anas Abu Farraj.
//------------------------------------------------------------------------------
import React from 'react';
import Joi from 'joi-browser';
import Form from './common/form';
import { getMovie, getMovies, saveMovie } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';

class MovieEditForm extends Form {
  constructor(props) {
    super(props);
    let movie = getMovie(this.props.match.params.id);
    this.state = {
      movies: getMovies(),
      data: {
        _id: movie._id,
        title: movie.title,
        genre: movie.genre,
        // genreId: movie.genre._id,
        // numberInStock: movie.numberInStock,
        dailyRentalRate: movie.dailyRentalRate,
      },
      errors: {},
      schema: {
        options: { abortEarly: false },
        _id: Joi.string(),
        title: Joi.string().required().label('Title'),
        genre: Joi.object().required().label('Genre'),
        // genreId: Joi.string(),
        // numberInStock: Joi.number().min(0).required().label('Number in Stock'),
        dailyRentalRate: Joi.number().min(0).max(10).required().label('Rate'),
      },
    };
  }

  handleFormSubmitToServer() {
    let movies = this.state.movies;
    saveMovie(this.state.data);
    this.setState(movies);
    // this.props.history.push('/movies'); // TODO: Uncomment when finish
  }

  handleGenresOptions() {
    return getGenres().map((_g) => (
      <option key={_g._id} value={_g.name}>
        {_g.name}
      </option>
    ));
  }

  render() {
    return (
      <React.Fragment>
        <h6 className="mb-3 text-muted fw-light">Movie ID. {this.state.data._id}</h6>
        <h2 className="mb-3">Edit Movie</h2>
        <div className="row">
          <div className="col-8">
            <form onSubmit={this.handleFormSubmit}>
              {this.renderInput('Title', 'text', 'title', true)}

              {/* TODO: Extract component, inputSelect.jsx, renderSelectInput()*/}
              <div className="mb-3">
                <label htmlFor="genre">Genre</label>
                <select name="genre" className="form-select" id="genre" defaultValue={this.state.data.genre.name}>
                  {this.handleGenresOptions()}
                </select>
              </div>

              {/*{this.renderInput('Number in Stock', 'number', 'numberInStock')}*/}
              {this.renderInput('Rate', 'number', 'dailyRentalRate')}
              {this.renderSubmitButton('Save')}
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MovieEditForm;
