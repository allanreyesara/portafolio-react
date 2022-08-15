import React from "react";
import '../index.css';
import { Home } from './Home';
import { useState } from "react";
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";


export function Header() {
    const [isShown, setIsShown] = useState(false);

    const handleClick = event => {
        setIsShown(current => !current)
    }

    return(
        
            <div className="header">
                <nav>
                    <ul>
                        <li id="nav-item">
                            <Link to="/">Home</Link>
                        </li>
                        <li id="nav-item" >
                            <Link to="/about">About Me</Link>
                        </li>
                        <li id="nav-item" >
                            <Link to="/skills">Skills</Link>
                        </li>
                        <li id="nav-item" >
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                    
                    <h2>Allan Araya</h2>
                </nav>
            </div>


    );
}

export default Header;