import React, { Component } from 'react';

class Intro extends Component {
  render() {
    return (
      <div className="intro" id="Intro">
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
      );
  }
}
  
  export default Intro;