import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';

function Header() {
    return (
		<>
        	<Navbar bg="dark" variant="dark">
    			<Navbar.Brand href="#home">Movie</Navbar.Brand>
  			</Navbar>
  		</>
    )
}

export default Header