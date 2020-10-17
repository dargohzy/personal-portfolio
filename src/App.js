import React from 'react';
import logo from './logo.svg';
import './App.css';
import Intro from './Intro';
import About from './About';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <header>
      </header>
      <div className="App-header">
        <Intro />
        <About />
        <a
          className="App-link"
          href="https://github.com/dargohzy/personal-portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github Repo
        </a>
      </div>
    </div>
  );
}

export default App;
