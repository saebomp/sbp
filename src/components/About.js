import React, { Component } from 'react';
import './../App.css';

class About extends Component {
  render() {
    return (
      <div className="main">
        <div className="intro">
          <div className="center">
            <div className="text">
              <h1>Hello, I’m Sae<br />Front-end developer</h1>
              <p>A self-directed, motivated front-end developer who loves building user-friendly websites and web apps with best practices. 
  Eager to improve development skills with a focus on clean and efficient code</p>
            </div>
            <div class="one">
              <div class="circle">
              </div>
            </div>
            <svg>
              <defs>
                <filter id="wave">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                  <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -9" result="wave" />
                  <feComposite in="SourceGraphic" in2="wave" operator="atop"/>
                </filter>
              </defs>
            </svg>
          </div>
        </div>
        <div className="wrapper">
          <h1>About</h1>
          <div className="container">
            <div className="about">
              <h4>Profile</h4>
              <p>Self-directed, motivated front-end developer who loves building user-friendly websites and web apps with best practices. Eagerness to improve developing skills, Focusing on clean and efficient code.</p>

              <h4>Skills</h4>
              <p>React / React Native / JavaScript / GraphQL / HTML5 / CSS / SASS / Github</p>

              <h4>Work Experience</h4>
              <h5>Littlefox <span>/ UI developer (Jan 2017 - Aug 2018)</span></h5>
              <ul>
                <li>Updated code to improve site performance with JavaScript, HTML 5 and CSS</li>
                <li>Worked across multiple devices and browsers</li>
                <li>Worked closely with design and marketing teams within an agile team environment.</li>
              </ul>

              <h6>RESULT</h6>
              <p>This work environment allowed me to develop my communication and interpersonal skills. An enriched understanding of multiple devices was acquired.</p>

              <h5>Whatever Search <span>/ UI developer (Oct 2015 - Dec 2016)</span></h5>
              <ul>
                <li>Built responsive websites with HTML, CSS, JQuery and Bootstrap</li>
                <li>Fixed bugs which were caused by old web browsers.</li>
                <li>Transitioned static websites to responsiveness</li>
              </ul>
              
              <h6>RESULT</h6>
              <p>I was able to gain a greater comprehension of responsive web and cross-browsing. </p>
                
              <h5>Gensol Soft <span>/ UI developer (Jun 2014 - Mar 2015)</span></h5>
              <ul>
                <li>Built National assembly minutes’ website with Web Accessibility guidelines,  HTML and CSS</li>
                <li>Built Asian Airlines’s policy manual system front-end with HTML and CSS</li>
              </ul>

              <h6>RESULT</h6>
              <p>
              I learned how to make a website accessible and became familiar with UX design while transitioning to a user-friendly website. I also improved my time management skill from working with clients.</p>

              <h4>Education</h4>
              <p>Web and Mobile App Design and Development, Langara College 
</p>
            </div>
          </div>
        </div>
      </div>
      );
  }
}
  
  export default About;