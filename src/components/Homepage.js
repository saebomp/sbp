import React, { Component } from 'react';
import './../App.css';

class Homepage extends Component {
  render() {
    return (
      <div className="main">
        <div class="wrapper">
          <h1>Home</h1>
          <div className="container">
            <p className="about">
            {/* Welcome to my portfolio.<br /> */}
            I’m a front-end web developer based in Burnaby.<br />
            While my focus is responsive websites with React, JavaScript, HTML and CSS, I also do love designing. I have some work experience as an web designer which menas that I am familiar with Adobe Photoshop, Illustrator and Premiere. 
            I am always learning and passionate about my craft. 
            </p>
          </div>
        </div>
      </div>
    );
  }
}
  
  export default Homepage;