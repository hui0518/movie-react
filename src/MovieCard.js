import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';
import './MovieList.css'
import Truncate from 'react-truncate';

function MovieCard({poster, title, synopsis, star}) {

    function numToStar(num){
        var intt = Math.round(num/2)
        return '★'.repeat(intt) + '☆'.repeat(5-intt)
    }

    return(
        <Card>
            <Card.Img variant="top" src={poster} />
            <Card.Body>
            <Card.Title>{title}</Card.Title>
                <Card.Text>
                    <Truncate lines={3} ellipsis={<span>... <a href='/link/to/article'>Read more</a></span>}>
                        {synopsis}
                    </Truncate>
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">{numToStar(star)}</small>
            </Card.Footer>
        </Card>
    )
}

export default MovieCard;