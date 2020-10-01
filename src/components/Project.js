import React, { Component, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { DATA }  from './Data';

export default function Project() {
    const [items,setItems] = useState(DATA);

    return (
      <div className="main">
        <div class="wrapper">
          <h1>Project</h1>
          {/* <div className="itemContainer">
            {items.map((item) => (
              <Link to={`/Project/${item.id}`}>
              <List
                id={item.id}
                imgtitle={item.imgtitle}
                src={item.src}
                alt={item.alt}
                name={item.name}
                title={item.title}
                href={item.ahref}
              />
              </Link>
            ))}
          </div> */}
          <div className="itemContainer">
            {items.map((item) => (
              <div className="items">
                <Link to={`/Project/${item.id}`}>
                  <a className="linkWrapper">
                    <div className="tPic">
                      <img title={item.imgtitle} src={item.src} alt={item.alt} />
                    </div>
                    <ul>
                      <li>{item.name}</li>
                      <li>{item.title}</li>
                      {/* <li><a href="{item.href}" target="_blank">{item.href}</a></li> */}
                    </ul>
                  </a>
                </Link>
            </div>
            ))}
          </div>
        </div>
      </div>
      );
  }
