import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { DATA }  from './Data';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

export default function Project() {
  const [items,setItems] = useState(DATA);


  return (
    <div className="wrapper" id="Project">
      <h2 className="heading">Projects</h2>
      <div className="itemContainer">
          {items.map((item) => (
            <div 
              data-aos="fade-up"
              data-aos-offset="180"
              data-aos-delay="50"
              data-aos-duration="800"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              // data-aos-anchor-placement="top-center"
              className="items"
            >
              {/* <Link to={`/Project/${item.id}`}> */}
                <a className="linkWrapper">
                  <div 
                    className="tPic"
                    data-aos="flip-left"
                    data-aos-delay="50"
                    data-aos-duration="800"
                  >
                    <img title={item.imgtitle} src={item.src} alt={item.alt} />
                  </div>
                  <ul>
                    <li className="itemname">{item.name}</li>
                    <li className="listStyle">
                    {item.skill.map((list) => (
                    <span>{list}</span>
                    ))}
                    </li>
                    <li><a href={item.href} target="_blank">{item.href}</a></li>
                    <div className="desclist">
                      {item.desc1 ? (
                      <li>{item.desc1}</li>
                      ): ( null
                      )}
                      {item.desc2.map((li) => (
                      <li>{li}</li>
                      ))}
                  </div>
                  </ul>
                </a>
              {/* </Link> */}
          </div>
        ))}
        </div>
      </div>
    );
  }

  //https://github.com/michalsnik/aos
