import React from "react";
import "./styles/Home.css";

const Home = () => {
  return (
    <section className="home-container">
      <div className="content">
        <h1>Hello, I'm <span className="highlight">Roshni Yadav</span></h1>
        <h2>A Passionate <span className="role">Web Developer</span></h2>
        <p>
          I specialize in creating responsive, modern, and interactive websites
          with React, JavaScript, and CSS. Let's build something amazing
          together!
        </p>
        <a href="/projects" className="btn">View My Work</a>
        <a href="https://drive.google.com/file/d/16-fxpIBgJk84WUV28h51v74mso713lz7/view?usp=drive_link" className="btn">Download me</a>
      </div>
    </section>
  );
};

export default Home;
