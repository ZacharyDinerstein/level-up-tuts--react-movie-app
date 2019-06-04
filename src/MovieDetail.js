import React, { Component } from 'react';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w300/';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280/';

class MovieDetail extends Component {
    state = {
      movie: {},
    }

    async componentDidMount() {
      const { id } = this.props.match.params;

      try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=f1bbc42b748c46f36a6ad798cf90524d&language=en-US`);
        const movie = await res.json();

        this.setState({
          movie,
        });
        console.log(movie);
      } catch (e) {
        // console.log(e);
      }
    }

    render() {
      const { movie } = this.state;

      return (
        <>
          <img src={`${BACKDROP_PATH}${movie.backdrop_path}`} alt={movie.title} />
          <img src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
          <h3>{movie.release_date}</h3>
          <p>{movie.overview}</p>
        </>
      );
    }
}

export default MovieDetail;