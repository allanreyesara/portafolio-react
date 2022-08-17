import React from "react";
import '../index.css';
import { Languages } from '../components/Languages';
import { Databases } from '../components/Databases';
import { Tools } from '../components/Tools';
import { OperativeSystem } from './OperativeSys';

export function Skills() {
    return(
        <div className="skills-container">
            <h1>Skills</h1>
            <p id="skills-intro">During this time I have learned different languages and tools to be able to offer solutions to whatever is needed,  
            my goal is to be a full stack engineer in the near future.</p>
            <ul className="skills">
                <li>
                    <h2>General</h2>
                </li>
                    <Languages />
                <li>
                    <h2>Database Engines</h2>
                </li>
                    <Databases />
                <li>
                    <h2>Tools</h2>
                </li>
                    <Tools />
                <li>
                    <h2>Operative Systems</h2>
                </li>
                    <OperativeSystem />
            </ul>
            
        </div>
    );
}

export default Skills;