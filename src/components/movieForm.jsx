//------------------------------------------------------------------------------
// Copyright 2021. Anas Abu Farraj.
//------------------------------------------------------------------------------
import React from 'react';
import Joi from 'joi-browser';
import Form from './common/form';
import { getMovie, saveMovie } from '../services/movieService';
import { getGenres } from '../services/genreService';
import { toast } from 'react-toastify';
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
      movie: {},
      genres: [],
      errors: {},
    };
  }

  schema = {
    options: { abortEarly: false },
    _id: Joi.string(),
    title: Joi.string().required().label('Title'),
    genreId: Joi.string().required().label('Genre'),
    numberInStock: Joi.number().required().min(0).max(100).label('Number in Stock'),
    dailyRentalRate: Joi.number().required().min(0).max(10).label('Rate'),
  };

  async componentDidMount() {
    const { data: genres } = await getGenres();
    this.setState({ genres });

    const movieId = this.props.match.params.id;
    const { data: movie } = await getMovie(movieId);

    if (movieId === 'new') {
      return;
    }

    if (!movie) {
      return this.props.history.replace('/not-found');
    }

    this.setState({ data: this.handleAddingData(movie) });
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

  handleFormSubmitToServer() {
    saveMovie(this.state.data);
    this.props.history.replace('/movies');
    toast.info('Successfully saved!', config.toastOptions);
  }

  // handleDefaultSelect(movieId) {
  //   // TODO: Need to return genre name
  //   // const genres = this.state.genres;
  //   // const genre = genres.filter((_g) => _g._id === movieId);
  //
  //   if (movieId !== 'new') {
  //     console.log(movieId);
  //     return 'Comedy';
  //   } else {
  //     return '--Select--';
  //   }
  // }

  render() {
    return (
      <React.Fragment>
        <h2 className="mb-3">{this.props.match.params.id === 'new' ? 'Add Movie' : 'Edit Movie'}</h2>
        <div className="row">
          <div className="col-8">
            <form onSubmit={this.handleFormSubmit}>
              {this.renderInput('Title', 'text', 'title', true)}
              {this.renderInputSelect('Genre', 'genreId', this.state.genres)}

              {/*{this.renderSelect("genreId", "Genre", this.state.genres)}*/}

              {this.renderInput('Number in Stock', 'number', 'numberInStock')}
              {this.renderInput('Rate', 'number', 'dailyRentalRate')}
              {this.renderSubmitButton('Save')}
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MovieForm;
