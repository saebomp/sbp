import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { DATA }  from './Data';


export default function Project() {
    const [items,setItems] = useState(DATA);

    return (
      <div className="wrapper" id="Project">
        <h2 className="heading">Projects</h2>
        <div className="itemContainer">
          {items.map((item) => (
            <div className="items">
              {/* <Link to={`/Project/${item.id}`}> */}
                <a className="linkWrapper">
                  <div className="tPic">
                    <img title={item.imgtitle} src={item.src} alt={item.alt} />
                  </div>
                  <ul>
                    <li className="itemname">{item.name}</li>
                    <li className="listStyle">
                    {item.skill.map((list) => (
                    <span>{list}</span>
                    ))}
                    </li>
                    {/* <li><a href="{item.href}" target="_blank">{item.href}</a></li> */}
                    <li>{item.period}</li>
                  </ul>
                </a>
              {/* </Link> */}
          </div>
          ))}
        </div>
      </div>
      );
  }
