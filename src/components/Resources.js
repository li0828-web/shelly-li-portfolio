import React from 'react';

const resources = [
  {
    title: "React Documentation",
    summary: "Official React documentation with comprehensive guides and API references. Essential for any React developer.",
    link: "https://reactjs.org/docs",
    icon: "⚛️"
  },
  {
    title: "MDN Web Docs",
    summary: "Mozilla's resource for web developers with detailed documentation on web technologies and best practices.",
    link: "https://developer.mozilla.org",
    icon: "🌐"
  },
  {
    title: "GitHub Learning Lab",
    summary: "Interactive courses to learn Git and GitHub workflows. Perfect for mastering version control.",
    link: "https://lab.github.com",
    icon: "🐙"
  },
  {
    title: "FreeCodeCamp",
    summary: "Free coding curriculum and project-based learning platform. Earn certifications while building projects.",
    link: "https://freecodecamp.org",
    icon: "💻"
  },
  {
    title: "Docker Documentation",
    summary: "Official Docker documentation for containerization best practices and deployment strategies.",
    link: "https://docs.docker.com",
    icon: "🐳"
  },
  {
    title: "CSS Tricks",
    summary: "Amazing resources for CSS, flexbox, grid, and modern styling techniques.",
    link: "https://css-tricks.com",
    icon: "🎨"
  }
];

function Resources() {
  return (
    <section className="section">
      <h2>Learning Resources</h2>
      <div className="resources-grid">
        {resources.map((resource, index) => (
          <div key={index} className="resource-card">
            <div className="resource-icon">{resource.icon}</div>
            <h3>{resource.title}</h3>
            <p>{resource.summary}</p>
            <a href={resource.link} target="_blank" rel="noopener noreferrer" className="btn-small">
              Visit Resource →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Resources;
