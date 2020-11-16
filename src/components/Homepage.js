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
            3 years of experience as a UI developer, Collaborated with several companies and organizations such as National Assembly and Asiana Airlines in Korea. I am always learning and passionate about my craft. 
            </p>
          </div>
        </div>
      </div>
    );
  }
}
  
  export default Homepage;

  //menu hover하면 언더라인생기는거
  //https://www.elegantthemes.com/blog/divi-resources/beautiful-css-hover-effects-you-can-add-to-your-divi-menus

  //https://tympanus.net/codrops/2017/08/01/inspiration-for-menu-hover-effects/