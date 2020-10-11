import React, { Component } from 'react';
import './../App.css';

class Homepage extends Component {
  render() {
    return (
      <div className="main">
        <div class="wrapper">
          <h1>Home</h1>
          <div className="container">
            <p>Welcome to my worrrrrrld</p>
            <p>Sae Sae Pak</p>
            <p>
              나로 말할거 같으면
              나는 어쩌구 저쩌구 사람
              무슨무슨 경력 3년과 함께 어디학교를 졸업함. 어떤 스킬과 랭귀지 능력이 있음
            </p>
          </div>
        </div>
      </div>
    );
  }
}
  
  export default Homepage;