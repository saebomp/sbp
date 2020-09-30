import React, { Component, useState, useEffect } from 'react';
import {DATA}  from './Data';
import List from './List';

export default function Project() {
    const [items,setItems] = useState(DATA);

    return (
      <div className="main">
        <h1>Project</h1>
        <div className="itemContainer">
          {items.map((item) => (
            <List
              id={item.id}
              imgtitle={item.imgtitle}
              src={item.src}
              alt={item.alt}
              name={item.name}
              title={item.title}
              href={item.ahref}
            />
          ))}
        </div>
      </div>
      );
  }
