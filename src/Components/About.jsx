import React from "react";

import "./styles/About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About Me</h1>
        <p>
          Hello! I'm a passionate developer with a keen interest in building
          elegant, functional, and user-friendly applications. With experience
          in frontend and backend technologies, I strive to create seamless
          digital experiences.
        </p>
        <p>
          I specialize in React.js, JavaScript, and modern web development
          practices. Always eager to learn and adapt, I love working on
          innovative projects that challenge me.
        </p>
        <div className="about-details">
          <h2>Skills & Technologies</h2>
          <ul>
            <li>React.js</li>
            <li>JavaScript, Jquery</li>
            <li>HTML, CSS, Bootstrap</li>
            <li>Python & Django</li>
            <li>Git & GitHub</li>
          </ul>
        </div>
      </div>
    </div>
  );
};


export default About;
