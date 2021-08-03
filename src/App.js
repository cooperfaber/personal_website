import { Navbar, NavItem, Container, NavDropdown, MenuItem, Nav } from 'react-bootstrap';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

const App = (props) => {
const navbar = {backgroundColor: '#F16E10'};
return (
    <div className="App">
        <Navbar collapseOnSelect style={navbar} expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Cooper Faber</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#expert">Projects</Nav.Link>
            <Nav.Link href="#educate">Experience</Nav.Link>
            </Nav>
            <Nav>
            <Nav.Link href="#deets">Contact</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
                Dank memes
            </Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
        <header className="App-header">

            <p>
                Welcome to my website! My name is Cooper, and I enjoy building software.
            </p>
            <p>
                Details about myself!
            </p>
            <p>
                Skill Set!
            </p>
            <p>
                Experience!
            </p>
            <a
                className="Git-Link"
                href="https://github.com/cooperfaber"
                target="_blank"
                rel="noopener noreferrer"
            >
                Github Link
            </a>
            <a
                className="LI-link"
                href="https://www.linkedin.com/in/cooper-faber-112a71213/"
                target="_blank"
                rel="noopener noreferrer"
            >
                LinkedIn Profile
            </a>
            <p>
                Photo Column
            </p>
                    </header>
    </div>
    
);
}

export default App;
