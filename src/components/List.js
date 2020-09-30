import React, { useState, useEffect, Typography } from 'react';

//import Linkedin from '../../../images/linkedin.png';

const List = (props) => (
    <div className="items0">
    <div className="tPic">
      <img title={props.imgtitle} src={props.src} alt={props.alt} />
    </div>
    <div className="itemTitle">{props.name}</div>
    <div className="itemDetail">{props.title}</div>
    <div className="link">
      <a href={props.ahref} target="_blank">
          <img 
            style={{width:'28px'}} 
            title="linkedin" 
            // src={Linkedin} 
            alt="ez" />
      </a>
    </div>
  </div>
);

export default List;