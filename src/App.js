import React from 'react';
import './App.css';
import { Navbar, Nav } from 'react-bootstrap'
import Main from "./components/main";
import Jumbotron from './components/jumbotron'
import Projects from './components/projects'

function App() {
  return (
    <div className="App">

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="navbar-color">
        <Navbar.Brand href="/">John Dixon</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {/* <Nav.Link href="/projects">Portfolio</Nav.Link> */}
            <Nav.Link href="https://drive.google.com/open?id=19UdQuAqbVGgCTMMQFp7SJsj_Ts8tSymG"
              target="_blank">Resume</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/contact">Contact Me </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Jumbotron />

      <div>
        <div className="page-content" />
        <Main />

      </div>
      <div className="projects-div">
        <Projects />
      </div>
    </div>
  );
}

export default App;
