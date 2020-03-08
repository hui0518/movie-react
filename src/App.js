import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import MovieList from './MovieList.js';
import Header from './Header.js';
import Intro from './Intro.js';
import Loading from './Loading.js';

class App extends Component {

    state = {}

    _callMovie = () => {
        return fetch("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
        .then(res => res.json())
        .then(json => json.data.movies)
        .catch(err => console.log(err))
    }

    _setMovie = async () => {
        const movies = await this._callMovie()
        this.setState({
            movies
        })
    }

    componentDidMount() {
        this._setMovie()
    }

    render() {
        return (
            <div className="App">
                <Header />
                <Intro />
                <div className="cont"> {this.state.movies ?   <MovieList data={this.state.movies}/>: <Loading />}</div> 
            </div>
        )
    }
}

export default App;