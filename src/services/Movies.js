import React, { Component } from "react";
import axios from "axios";

const ApiMovies = axios.create({
  baseURL:"https://api.themoviedb.org/3/movie/popular?api_key=f5e33b7872870b499cdef685aff18b48"
    
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
    // console.log(response.data.results);
    this.setState({
      movies: response.data.results
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
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default App;
