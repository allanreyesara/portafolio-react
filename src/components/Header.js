import React from "react";
import '../index.css';

export function Header() {
    return(
        <div className="header">
            <nav>
                <ul>
                    <li id="nav-item"><a href="#">About Me</a></li>
                    <li id="nav-item"><a href="#">Skills</a></li>
                    <li id="nav-item"><a href="#">Contact</a></li>
                    <li id="nav-item"><a href="#">Home</a></li>
                </ul>
                <h2>Allan Araya</h2>
            </nav>
        </div>

    );
}

export default Header;