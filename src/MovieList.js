import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {CardColumns,Card} from 'react-bootstrap';

import MovieCard from './MovieCard.js';

function MovieList({data}) {
    return (

<CardColumns>
        { data.map((movie) => {
            return <MovieCard title={movie.title} poster={movie.medium_cover_image} star={movie.rating} synopsis={movie.synopsis}/>
        })}
        </CardColumns>

    )
}

export default MovieList;