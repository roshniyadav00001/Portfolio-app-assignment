import React from "react";
import "./styles/Portfolio.css"; // Import the CSS file

const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "A modern and minimalistic portfolio website built with React.",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/be510767817393.5b472244e895f.gif", // Replace with your project image
    link: "https://educative-webapp.netlify.app",
  },
  {
    id: 2,
    title: "Project 2",
    description: "A fully functional e-commerce website using Next.js and Stripe.",
    image: "https://cdn.dribbble.com/users/1106204/screenshots/7063847/media/dc64a6ac0e324de8aaceec810846fff7.gif",
    link: "https://educative-webapp.netlify.app",
  },
  {
    id: 3,
    title: "Project 3",
    description: "A real-time weather forecasting app using OpenWeather API.",
    image: "https://i.pinimg.com/originals/55/10/1b/55101bcfd38b176bcd886decb516b80d.gif",
    link: "https://educative-webapp.netlify.app",
  },
];

const Portfolio = () => {
  return (
    <section className="projects-section">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};




export default Portfolio;
