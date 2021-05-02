import React, { Component } from 'react';
class About extends Component {
  render() {
    return (
      <div className="wrapper" id="About" >
        <h2 className="heading">About</h2>
        <div className="container">
          <div className="about">
            <h4>Work Experience</h4>
            <h5>Littlefox <span>(Seoul, Korea) / UI Developer (Jan 2017 - Aug 2018)</span></h5>
            <ul>
              <li>Updated code to improve site performance with JavaScript, HTML 5 and CSS.</li>
              <li>Operated across multiple devices and browsers.</li>
              <li>Worked closely with design and marketing teams within an agile team environment.</li>
            </ul>

            <h6 className="hidden">RESULT</h6>
            <p className="hidden">This work environment allowed the development of communication and interpersonal skills. An enriched understanding of multiple devices was acquired.</p>

            <h5>Whatever Search <span>(Seoul, Korea) / UI Developer (Oct 2015 - Dec 2016)</span></h5>
            <ul>
              <li>Built responsive websites with HTML, CSS, JQuery and Bootstrap.</li>
              <li>Fixed bugs which were caused by old web browsers.</li>
              <li>Transitioned static websites to responsiveness.</li>
            </ul>
            
            <h6 className="hidden">RESULT</h6>
            <p className="hidden">Able to gain a greater comprehension of responsive web and cross-browsing. </p>
              
            <h5>Gensol Soft <span>(Seoul, Korea) / UI Developer (Jun 2014 - Mar 2015)</span></h5>
            <ul>
              <li>Built National assembly minutes’ website with Web Accessibility guidelines,  HTML and CSS.</li>
              <li>Built Asiana Airlines’s policy manual system front-end with HTML and CSS.</li>
            </ul>

            <h6 className="hidden">RESULT</h6>
            <p className="hidden">
            Learned how to make a website accessible and became familiar with UX design while transitioning to a user-friendly website. Improved time management skills when working with clients.</p>

            <h4>Education</h4>
            <p>Web and Mobile App Design and Development, Langara College <span>(Vancouver, BC)</span></p>
            <ul>
              <li>Earned Dean's Honor for good academic standing
</li>
            </ul>
          </div>
        </div>
      </div>
      );
  }
}
  
  export default About;