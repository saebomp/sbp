import React, { useState, useEffect } from 'react';
import { DATA }  from './Data';


const List = ({match}) => {
  let id = match.params.id -1;

  const [item,setItem] = useState(DATA[id]);

  return (
    <div className="main">
      <div className="wrapper">
      <h1>{item.name}</h1>
      <div className="listWrapper">
        <div className="imgContainer">
          <img title={item.imgtitle} src={item.src} alt={item.alt} className="prjImg" />
        </div>
        <ul className="desc">
          <li>{item.name}</li>
          <li>{item.href}</li>
          <li className="listStyle">
            {item.title.map((list) => (
              <span>{list}</span>
            ))}
          </li>
          <li><p>{item.desc}</p></li>
        </ul>
      </div>
      </div>
    </div>
  )
}
export default List;