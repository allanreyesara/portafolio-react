import React from "react";
import '../index.css';
import { useState } from "react";

export function Contact() {
    return(
        <div className="contact-container">
            <h1>Contact Me</h1>
            <p id="contactdes">Get in touch and let's create amazing projects together</p>
            <div className="contact-cards">
                <div className="card">
                    <img src="https://i.postimg.cc/RV4qgCn2/Gmail-icon-2020-svg.webp"/>
                    <div className="gmail-text">
                        <a href="mailto: allanreyes0107@gmail.com" target="_blank">
                        <p>allanreyes0107@gmail</p>
                        </a>
                    </div>
                </div>
                <div className="card">
                    <img src="https://i.postimg.cc/Gm7mqkk5/linkedin.png"/>
                    <div className="linkedin-text">
                        <a href="linkedin.com/in/allan-araya-reyes-a9646721b" target="_blank">
                        <p>LinkedIn</p>
                        </a>
                    </div>
                </div>
                <div className="card">
                    <img src="https://i.postimg.cc/fTHt91TG/fblogo.png"/>
                    <div className="fb-text">
                        <a href="https://www.facebook.com/people/Allan-Araya-Reyes/100007673715862/" target="_blank">
                        <p>Facebook</p>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Contact;