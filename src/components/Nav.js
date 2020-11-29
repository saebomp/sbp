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
                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="77" viewBox="0 0 70 77">
                <g id="Group_4" data-name="Group 4" transform="translate(-108 -56)">
                    <text id="S" transform="translate(108 77)" fill="#000" font-size="22" font-family="Roboto-Bold, Roboto" font-weight="700"><tspan x="0" y="0">S</tspan></text>
                    <text id="A" transform="translate(133 77)" fill="#000" font-size="22" font-family="Roboto-Bold, Roboto" font-weight="700"><tspan x="0" y="0">A</tspan></text>
                    <text id="E" transform="translate(161 77)" fill="#000" font-size="22" font-family="Roboto-Bold, Roboto" font-weight="700"><tspan x="0" y="0">E</tspan></text>
                    <text id="B" transform="translate(108 102)" fill="#000" font-size="22" font-family="Roboto-Bold, Roboto" font-weight="700"><tspan x="0" y="0">B</tspan></text>
                    <text id="O" transform="translate(133 102)" fill="#000" font-size="22" font-family="Roboto-Bold, Roboto" font-weight="700"><tspan x="0" y="0">O</tspan></text>
                    <text id="M" transform="translate(158 102)" fill="#000" font-size="22" font-family="Roboto-Bold, Roboto" font-weight="700"><tspan x="0" y="0">M</tspan></text>
                    <text id="P" transform="translate(108 127)" fill="#000" font-size="22" font-family="Roboto-Bold, Roboto" font-weight="700"><tspan x="0" y="0">P</tspan></text>
                    <text id="A-2" data-name="A" transform="translate(133 127)" fill="#000" font-size="22" font-family="Roboto-Bold, Roboto" font-weight="700"><tspan x="0" y="0">A</tspan></text>
                    <text id="K" transform="translate(161 127)" fill="#000" font-size="22" font-family="Roboto-Bold, Roboto" font-weight="700"><tspan x="0" y="0">K</tspan></text>
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