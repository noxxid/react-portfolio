import React from 'react';
import './App.css';
import Main from "./components/main";
import Jumbotron from './components/jumbotron'
import Projects from './components/projects'
// import Contact from './components/contact'

function App() {
  return (
    <div className="App">
      <Jumbotron />

      <div>
        <div className="page-content" />
        <Main />

      </div>
      <div className="projects-div" id="projects">
        <Projects />
      </div>
    </div>
  );
}

export default App;
