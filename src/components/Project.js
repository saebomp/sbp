import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { DATA }  from './Data';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

AOS.init();
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function Project() {
  const classes = useStyles();
  const [items,setItems] = useState(DATA);
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="wrapper" id="Project">
      <h2 className="heading">Projects</h2>
      <div className="itemContainer">
        <div>
          {items.map((item) => (
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
              
            <div 
              data-aos="fade-up"
              data-aos-offset="300"
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
                    {/* <li><a href="{item.href}" target="_blank">{item.href}</a></li> */}
                    <li>{item.period}</li>
                  </ul>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                  </AccordionSummary>
                </a>
              {/* </Link> */}
          </div>
          <AccordionDetails>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
              maximus est, id dignissim quam.
          </AccordionDetails>
        </Accordion>
        ))}
        </div>
        </div>
      </div>
    );
  }

  //https://github.com/michalsnik/aos
