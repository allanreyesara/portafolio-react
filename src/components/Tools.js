import React from "react";
import '../index.css';

export function Tools() {
    return(
        <div class="skills-images" id="tools-skills">
            <i class="skill-item">
                <img src="https://i.postimg.cc/8zx6KBHC/net-Beans-Log.png" alt="netbeanslogo" id="skill-logo" />
                <p>NetBeans</p>
            </i>
            <i class="skill-item">
                <img src="https://i.postimg.cc/zDpRZ1j6/pycharm.png" alt="pycharmlogo" id="skill-logo" />
                <p>PyCharm</p>
            </i>
            <i class="skill-item">
                <img src="https://i.postimg.cc/T3bww8VR/visual-Studio.png" alt="visualStudio" id="skill-logo" />
                <p>Visual Studio Code</p>
            </i>
        </div>
    );
}

export default Tools;