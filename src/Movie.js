import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w300/';

const Movie = ({ movie }) => (
  <Link to={`/${movie.id}`}>
    <img src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
  </Link>
);

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Movie;
