import React from 'react';
import { Link } from "react-router-dom";

//style
import './../App.css';

export default function Nav() {
    return (
    <nav>
        <div className="logo">
            <Link to={process.env.PUBLIC_URL + '/'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="62" height="67" viewBox="0 0 62 67">
                <g transform="translate(-4)">
                    <text transform="translate(11 21)" font-size="20" font-family="Roboto-Bold, Roboto" font-weight="700">
                        <tspan x="-6.147" y="0">S</tspan>
                    </text>
                    <text transform="translate(34 21)" font-size="20" font-family="Roboto-Bold, Roboto" font-weight="700">
                        <tspan x="-6.729" y="0">A</tspan>
                    </text>
                    <text transform="translate(57 21)" font-size="20" font-family="Roboto-Bold, Roboto" font-weight="700">
                        <tspan x="-5.625" y="0">E</tspan>
                    </text>
                    <text transform="translate(11 42)" font-size="20" font-family="Roboto-Bold, Roboto" font-weight="700">
                        <tspan x="-6.382" y="0">B</tspan>
                    </text>
                    <text transform="translate(34 42)" font-size="20" font-family="Roboto-Bold, Roboto" font-weight="700">
                        <tspan x="-6.904" y="0">O</tspan>
                    </text>
                    <text transform="matrix(-1, 0, 0, 1, 57, 42)" font-size="19.5" font-family="Roboto-Bold, Roboto" font-weight="700">
                        <tspan x="-8.541" y="0">M</tspan>
                    </text>
                    <text transform="translate(11 62)" font-size="20" font-family="Roboto-Bold, Roboto" font-weight="700">
                        <tspan x="-6.45" y="0">P</tspan>
                    </text>
                    <text transform="translate(34 62)" font-size="20" font-family="Roboto-Bold, Roboto" font-weight="700">
                        <tspan x="-6.729" y="0">A</tspan>
                    </text>
                    <text transform="translate(57 62)" font-size="20" font-family="Roboto-Bold, Roboto" font-weight="700">
                        <tspan x="-6.348" y="0">K</tspan>
                    </text>
                </g>
                </svg>
            </Link>
        </div>
        <ul className="router">
            <li>
                <Link to={process.env.PUBLIC_URL + '/'}>Home</Link>
            </li>
            <li>
                <Link to="/About">About</Link>
            </li>
            <li>
                <Link to="/Project">Project</Link>
            </li>
            <li>
                <Link to="/Contact">Contact</Link>
            </li>
        </ul>
    </nav>
    )
}