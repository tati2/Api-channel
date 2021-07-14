import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components"



const Container = styled.div`

display: flex;
flex-direction: column;
align-items: center;
padding: 0.5rem;
margin: 0 auto;


`
const BoxMap = styled.div` 
display:flex;
flex-wrap: wrap;
`

const Card = styled.div`
margin:1rem;
`

const Images = styled.img`
width:20vw;
`
const Paragraph = styled.p`
text-align: justify;
`



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

    console.log(response.data.results)

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
      <Container>
        <div>
          <h1>TTNFLIX</h1>
        </div>
        <BoxMap>
          {this.state.movies.map((item, index) => (
            <Card key={index}>
              <Images src={item.poster_path} alt="movie-images" />
              <Paragraph>{item.release_date}</Paragraph>
              <Paragraph>{item.vote_average}</Paragraph>
            </Card>
          ))}
        </BoxMap>
      </Container>
    );
  }
}
export default App;


