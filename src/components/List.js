import React, { useState, useEffect, Typography } from 'react';

//import Linkedin from '../../../images/linkedin.png';

const List = (props) => (
    <div className="items">
      <div className="tPic">
        <img title={props.imgtitle} src={props.src} alt={props.alt} />
      </div>
      <ul>
        <li>{props.name}</li>
        <li>{props.title}</li>
        <li><a href={props.ahref} target="_blank">{props.ahref}</a></li>
      </ul>
  </div>
);

export default List;