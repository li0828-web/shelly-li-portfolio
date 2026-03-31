import React from 'react';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and Stripe payment integration.",
    image: "https://via.placeholder.com/300x200",
    link: "https://github.com/li0828-web/ecommerce-platform",
    techList: ["React", "Node.js", "MongoDB", "Express", "Stripe API"]
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates using Socket.io. Includes task boards, team collaboration, and progress tracking with charts.",
    image: "https://via.placeholder.com/300x200",
    link: "https://github.com/li0828-web/task-manager",
    techList: ["React", "Socket.io", "Express", "PostgreSQL", "Chart.js"]
  },
  {
    title: "Weather Dashboard",
    description: "Interactive weather dashboard with location-based forecasts, interactive maps, and historical data visualization using OpenWeather API.",
    image: "https://via.placeholder.com/300x200",
    link: "https://github.com/li0828-web/weather-app",
    techList: ["React", "OpenWeather API", "Chart.js", "Leaflet", "Axios"]
  },
  {
    title: "Portfolio Website",
    description: "Modern portfolio website built with React and Docker, featuring responsive design and CI/CD pipeline with GitHub Actions.",
    image: "https://via.placeholder.com/300x200",
    link: "https://github.com/li0828-web/shelly-li-portfolio",
    techList: ["React", "Docker", "GitHub Actions", "Nginx", "CSS3"]
  }
];

function Work() {
  return (
    <section className="section">
      <h2>Featured Work</h2>
      <div className="work-grid">
        {projects.map((project, index) => (
          <div key={index} className="work-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-list">
              {project.techList.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn">
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Work;
