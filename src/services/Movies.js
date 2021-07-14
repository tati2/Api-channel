import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components"

const ApiMovies = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie/popular?api_key=f5e33b7872870b499cdef685aff18b48"

});

class App extends Component {
  state = {
    movies: []
  };

  componentDidMount() {
    this.getMovies()

  }

  getMovies = async () => {
    const response = await ApiMovies.get();
    this.setState({
      movies: response.data.results
    })

    const moviePoster = response.data.results.map((item) => {
      return {
        ...item,
        poster_path: `https://image.tmdb.org/t/p/w500${item.poster_path}`
      };
    });

    this.setState({
      movies: moviePoster
    });
  }

  render() {
    return (
      <div>
        <div>
          <h1>Filmes</h1>
          {this.state.movies.map((item, index) => (
            <div key={index}>
              <h2>{item.title}</h2>
              <img src={item.poster_path} alt="movie-images" />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default App;
