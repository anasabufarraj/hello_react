//------------------------------------------------------------------------------
// Copyright 2021. Anas Abu Farraj.
//------------------------------------------------------------------------------
import React from 'react';
import Form from './common/form';
import { getMovie, saveMovie } from '../services/movieService';
import { getGenres } from '../services/genreService';
import Joi from 'joi-browser';
import { toast } from 'react-toastify';
import auth from '../services/authService';
import config from '../config.json';

class MovieForm extends Form {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        title: '',
        genreId: '',
        numberInStock: '',
        dailyRentalRate: '',
      },
      genres: [],
      errors: {},
    };
  }

  schema = {
    options: { abortEarly: false },
    _id: Joi.string(),
    title: Joi.string().required().min(3).label('Title'),
    genreId: Joi.string().required().label('Genre'),
    numberInStock: Joi.number().required().min(0).max(100).label('Number in Stock'),
    dailyRentalRate: Joi.number().required().min(0).max(10).label('Rate'),
  };

  async componentDidMount() {
    await this.populateGenres();
    await this.populateMovies();
  }

  async populateGenres() {
    const { data: genres } = await getGenres();
    this.setState({ genres });
  }

  async populateMovies() {
    const movieId = this.props.match.params.id;

    if (movieId === 'new') return;

    try {
      const { data: movie } = await getMovie(movieId);
      this.setState({ data: this.handleAddingData(movie) });
    } catch (err) {
      if (err.response && err.response.status === 404) {
        toast.error('Movie not found', config.toastOptions);
        this.props.history.replace('/not-found');
      }
    }
  }

  handleAddingData(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    };
  }

  async handleFormSubmitToServer() {
    await saveMovie(this.state.data);
    this.props.history.replace('/');
    toast.info('Successfully saved!', config.toastOptions);
  }

  render() {
    const user = auth.getCurrentUserToken();

    return (
      <React.Fragment>
        <h2 className="mb-3">{this.props.match.params.id === 'new' ? 'Add Movie' : 'Edit Movie'}</h2>
        <div className="row">
          <div className="col-8">
            <form onSubmit={this.handleFormSubmit}>
              {this.renderInput('Title', 'text', 'title', true)}
              {this.renderInputSelect('Genre', 'genreId', this.state.genres)}
              {this.renderInput('Number in Stock', 'number', 'numberInStock')}
              {this.renderInput('Rate', 'number', 'dailyRentalRate')}
              {!user.isAdmin && this.props.match.params.id === 'new' && (
                <p className="mb-3 text-danger small">
                  <b>Note!</b> Deleting movies need an admin privileges.
                </p>
              )}
              {this.renderSubmitButton('Save')}
              {this.props.match.params.id === 'new' ? null : this.renderCancelButton('Cancel')}
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MovieForm;
