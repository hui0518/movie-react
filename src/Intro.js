import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Jumbotron, Button} from 'react-bootstrap'

function Intro() {
    return (
        <Jumbotron>
            <h1>Hello!</h1>
            <p>
                This is a test web shows movie info.
            </p>
            <p>
                <Button variant="primary" href="#">github link</Button>
            </p>
        </Jumbotron>
    )
}

export default Intro