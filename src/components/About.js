import React, { Component } from 'react';
import './../App.css';

class About extends Component {
  render() {
    return (
      <div className="main">
        <div class="wrapper">
          <h1>About</h1>
          <div className="container">
            <ul className="about">
              <li><h4>Profile</h4></li>
              <li>Self-directed, motivated front-end developer who loves building user-friendly websites and web apps with best practices. Eagerness to improve developing skills, Focusing on clean and efficient code.</li>
              <li><h4>Skills</h4></li>
              <li>React / React Native / JavaScript / HTML5 / CSS / SASS / Github</li>
              <li><h4>Work Experience</h4></li>
              <li>
                Littlefox <span>(2017~2018)</span> <br />
                - Updated code to improve site performance.<br />
                - Utilized JavaScript, HTML 5 and CSS<br />
                - Worked closely with design marketing teams within an agile team environment.<br />
                <br />
                Whatever Search <span>(2015~2016)</span><br />
                - Built several responsive websites with HTML, CSS, JQuery and Bootstrap<br />
                - Worked across multiple devices and browsers<br />
                <br />
                Gensol Soft <span>(2014)</span><br />
                - Built National assembly minutes’ website with Web Accessibility guidelines,  HTML and CSS <br />
                - Built Asian Airlines’s policy manual system front-end with HTML and CSS
                </li>
              <li><h4>Education</h4></li>
              <li>Web and Mobile App Design and Development, Langara College 
</li>
            </ul>
          </div>
        </div>
      </div>
      );
  }
}
  
  export default About;