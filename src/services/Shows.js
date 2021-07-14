import React, { Component } from "react";
import axios from "axios";

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
        this.setState({
            shows: response.data.results
        });

        const showsPoster = response.data.results.map((item) => {
            return {
                ...item,
                poster_path: `https://image.tmdb.org/t/p/w500${item.poster_path}`
            };
        });

        this.setState({
            shows: showsPoster
        });
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Séries</h1>
                    {this.state.shows.map((item, index) => (
                        <div key={index}>
                            <h2>{item.name}</h2>
                            <p>{item.overview}</p>
                            <img src={item.poster_path} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default App;
