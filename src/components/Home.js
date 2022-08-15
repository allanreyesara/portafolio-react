import React from "react";
import '../index.css';
import { useNavigate } from "react-router-dom";

export function Home() {
    const navigate = useNavigate();
    return(
        <div>
            <div className="home-text">
                <h3>Hello! My name is</h3>
                <h1>Allan Araya</h1>
                <h2>Web Development Student</h2>
                <button className="contactButton" onClick={() => navigate("/contact")}>Contact Me!</button>
            </div>
            <div className="photo-Allan">
                <img src='https://i.postimg.cc/pLHC4SLg/pfp.png' alt="photo of Allan"></img>
            </div>
        </div>
    );
}

export default Home;