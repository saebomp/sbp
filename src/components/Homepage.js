import React, { Component } from 'react';
import './../App.css';
import Intro from './Intro'
import About from './About'
import Contact from './Contact'
import Project from './Project'
import Footer from './Footer'


class Homepage extends Component {
  render() {
    return (
      <div className="main">
        <Intro />
        <Project />
        <About />
        {/* <Contact /> */}
        {/* <Footer /> */}
      </div>
    );
  }
}
  
export default Homepage;

