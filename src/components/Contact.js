import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className="main">
        <div class="wrapper">
            <h1>Contact</h1>
            <div className="container">
              <div className="contact">
                <ul>
                  <li className="bg bg1">saebompak@gmail.com</li>
                  <li className="bg bg2">(236) 986-5481</li>
                  <li className="bg bg3">4670 Assembly way, Burnaby, BC</li>
                </ul>
                <ul>
                  <li className="bg bg4"><a href="https://www.github.com/saebomp" target="_blank">github.com/saebomp</a></li>
                  <li className="bg bg5"><a href="https://www.linkedin.com/in/saebompak" target="_blank">linkedin.com/in/saebompak</a></li>
                </ul>
              </div>
          </div>
        </div>
      </div>
      );
  }
}
  
export default Contact;

