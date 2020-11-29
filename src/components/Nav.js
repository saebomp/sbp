import React from 'react';
// import { NavLink, Link } from "react-router-dom";
import { NavHashLink as NavLink } from 'react-router-hash-link';

//style
import './../App.css';
const checkActive = (match, location) => {
    if(!location) return false;
    const {pathname} = location;
    console.log(pathname);
    return pathname === "/";
}

export default function Nav() {
    return (
    <nav>
        <div className="nav_wrapper">
            <div className="logo">
                <NavLink to="/#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="62" height="67" viewBox="0 0 62 67">
                    <g transform="translate(-4)">
                        <text transform="translate(11 21)" fill="#000" font-size="20" font-family="Roboto-Bold, Roboto" font-weight="700">
                            <tspan x="-6.147" y="0">S</tspan>
                        </text>
                        <text transform="translate(34 21)" fill="#000" font-size="20" font-family="Roboto-Bold, Roboto" font-weight="700">
                            <tspan x="-6.729" y="0">A</tspan>
                        </text>
                        <text transform="translate(57 21)" fill="#000" font-size="20" font-family="Roboto-Bold, Roboto" font-weight="700">
                            <tspan x="-5.625" y="0">E</tspan>
                        </text>
                        <text transform="translate(11 42)" fill="#000" font-size="20" font-family="Roboto-Bold, Roboto" font-weight="700">
                            <tspan x="-6.382" y="0">B</tspan>
                        </text>
                        <text transform="translate(34 42)" fill="#000" font-size="20" font-family="Roboto-Bold, Roboto" font-weight="700">
                            <tspan x="-6.904" y="0">O</tspan>
                        </text>
                        <text transform="matrix(-1, 0, 0, 1, 57, 42)" font-size="19.5" font-family="Roboto-Bold, Roboto" fill="#000" font-weight="700">
                            <tspan x="-8.541" y="0">M</tspan>
                        </text>
                        <text transform="translate(11 62)" fill="#000" font-size="20" font-family="Roboto-Bold, Roboto" font-weight="700">
                            <tspan x="-6.45" y="0">P</tspan>
                        </text>
                        <text transform="translate(34 62)" fill="#000" font-size="20" font-family="Roboto-Bold, Roboto" font-weight="700">
                            <tspan x="-6.729" y="0">A</tspan>
                        </text>
                        <text transform="translate(57 62)" fill="#000" font-size="20" font-family="Roboto-Bold, Roboto" font-weight="700">
                            <tspan x="-6.348" y="0">K</tspan>
                        </text>
                    </g>
                    </svg>
                </NavLink>
            </div>
            <ul className="router menu menu_wrap">
                {/* <li>
                    <NavLink to={process.env.PUBLIC_URL + '/'} className="menu_item">
                        <span class="menu_item_name" activeClassName="selected">Home</span>
                    </NavLink>
                </li> */}
                <li>
                    <NavLink 
                        to="#Intro" 
                        className="menu_item" 
                        activeClassName="selected" 
                        smooth
                        isActive={checkActive}
                    >
                        <span class="menu_item_name">Home</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="#About" 
                        className="menu_item" 
                        activeClassName="selected" 
                        smooth
                        isActive={checkActive}
                    >
                        <span class="menu_item_name">About</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="#Project" 
                        className="menu_item"
                        activeClassName="selected"
                        smooth
                    >
                    <span class="menu_item_name">Project</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="#Contact" 
                        className="menu_item" 
                        activeClassName="selected"
                        smooth
                    >
                    <span class="menu_item_name">Contact</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    </nav>
    )
}