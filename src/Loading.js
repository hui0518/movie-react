import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Spinner} from 'react-bootstrap'


function Loading() {
    return (
        <>
            <Spinner animation="border" variant="primary" />
        </>
    )
}

export default Loading