import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components"


const Container = styled.div`

display: flex;
flex-direction: column;
align-items: center;
padding: 2rem;
margin: 1vw 2vw;
min-width:80vw;
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
border-radius: 5%;
border: 1px solid #fff;
`
const Paragraph = styled.p`
color:#fff;
margin: 0.5rem;
width:15vw;
font-size:17px;
font-weight: bold;


`
const Title = styled.h1`
color: #fff;
`


const ApiTv = axios.create({
    baseURL: "https://api.themoviedb.org/3/tv/popular?api_key=f5e33b7872870b499cdef685aff18b48"

});

class App extends Component {

    state = {
        shows: []
    }

    componentDidMount() {
        this.getShows()
    }

    getShows = async () => {
        const response = await ApiTv.get();
               
        const fullShows = response.data.results.map((item) => {
            return {
                ...item,
                poster_path: `https://image.tmdb.org/t/p/w500${item.poster_path}`
            };
        });

        this.setState({
            shows: fullShows
        });
    }

    render() {
        return (
            <Container>
                <div>
                    <Title>Séries</Title>
                </div>
                <BoxMap>
                    {this.state.shows.map((item, index) => (
                        <Card key={index}>
                            <Images src={item.poster_path} alt={item.name} />
                            <Paragraph>{item.name}</Paragraph>
                            <Paragraph>{item.release_date}</Paragraph>
                        </Card>
                    ))}
                </BoxMap>
            </Container>
        );
    }
}

export default App;
