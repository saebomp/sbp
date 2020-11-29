import React, { Component } from 'react';
import './../App.css';
import Intro from './Intro'
import About from './About'
import Contact from './Contact'
import Project from './Project'


class Homepage extends Component {
  render() {
    return (
      <div className="main">
        <Intro />
        <About />
        <Project />
        <Contact />
      </div>
    );
  }
}
  
export default Homepage;

