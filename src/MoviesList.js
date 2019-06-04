import React, { Component } from 'react';
import Movie from './Movie';

class MoviesList extends Component {
    state = {
      movies: [],
    }

    async componentDidMount() {
      try {
        const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=f1bbc42b748c46f36a6ad798cf90524d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
        const movies = await res.json();

        this.setState({
          movies: movies.results,
        });
      } catch (e) {
        // console.log(e);
      }
    }

    render() {
      const { movies } = this.state;

      return (
        <div>
          {movies.map(movie => <Movie key={movie.id} movie={movie} />)}
        </div>
      );
    }
}

export default MoviesList;
