import React from 'react';
import { Link } from "react-router-dom";

//style
import './../App.css';

export default function Nav() {
    return (
    <nav>
        <ul className="router">
        <li>
            <Link to="/">Home</Link>
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