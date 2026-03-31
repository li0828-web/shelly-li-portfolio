import React from 'react';

function Skills() {
  const languages = [
    "JavaScript/ES6", "Python", "Java", "TypeScript", "HTML5/CSS3", "SQL"
  ];
  
  const frameworks = [
    "React", "Node.js", "Express", "Django", "Spring Boot", "Bootstrap", "Tailwind CSS"
  ];
  
  const tools = [
    "Git/GitHub", "Docker", "AWS", "MongoDB", "PostgreSQL", "Jenkins", "VS Code"
  ];

  return (
    <section className="section">
      <h2>Skills & Expertise</h2>
      
      <div className="skills-grid">
        <div className="skill-category">
          <h3>💻 Languages</h3>
          <ul>
            {languages.map((lang, i) => (
              <li key={i}>{lang}</li>
            ))}
          </ul>
        </div>
        
        <div className="skill-category">
          <h3>🚀 Frameworks & Libraries</h3>
          <ul>
            {frameworks.map((framework, i) => (
              <li key={i}>{framework}</li>
            ))}
          </ul>
        </div>
        
        <div className="skill-category">
          <h3>🛠️ Tools & Platforms</h3>
          <ul>
            {tools.map((tool, i) => (
              <li key={i}>{tool}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
