import React, { Component } from 'react';
class About extends Component {
  render() {
    return (
      <div className="wrapper" id="About" >
        <h2 className="heading">About</h2>
        <div className="container">
          <div className="about">
            <h4>Work Experience</h4>
            <h5>Littlefox <span>(Seoul, Korea) / UI Developer (2017 - 2018)</span></h5>
            <ul>
              <li>Implemented pixel perfect HTML for a design across different web browsers and platforms.</li>
              <li>Translated designs and wireframes into high quality code, complying with best practices.</li>
              <li>Collaborated with the team on feature development, code reviews, and bug fixing.</li>
            </ul>

            <h6 className="hidden">RESULT</h6>
            <p className="hidden">This work environment allowed the development of communication and interpersonal skills. An enriched understanding of multiple devices was acquired.</p>

            <h5>Whatever Search <span>(Seoul, Korea) / UI Developer (2015 - 2016)</span></h5>
            <ul>
              <li>Developed and maintained responsive web applications leveraging front end development using HTML, CSS and JavaScript.</li>
              <li>Implemented user interfaces for multiple devices according to design.</li>
              <li>Transitioned static websites to responsiveness.</li>
            </ul>
            
            <h6 className="hidden">RESULT</h6>
            <p className="hidden">Able to gain a greater comprehension of responsive web and cross-browsing. </p>
              
            <h5>Gensol Soft <span>(Seoul, Korea) / UI Developer (2014 - 2015)</span></h5>
            <ul>
              <li>Worked on a variety of clients and project types.</li>
              <li>Collaborated with the design team to develop and optimize for a consistent user experience.</li>
            </ul>

            <h6 className="hidden">RESULT</h6>
            <p className="hidden">
            Learned how to make a website accessible and became familiar with UX design while transitioning to a user-friendly website. Translated designs and wireframes into responsive websites.</p>

            <h4>Education</h4>
            <p>Web and Mobile App Design and Development, Langara College <span>(Vancouver, BC) / 2019 - 2020</span></p>
            <ul>
              <li>Earned Dean's Honor for good academic standing.</li>
            </ul>
          </div>
        </div>
      </div>
      );
  }
}
  
  export default About;