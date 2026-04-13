import React from 'react';

function BasicInfo() {
  return (
    <section className="section">
      <h2>About Me</h2>
      <div className="basic-info">
        <img src="https://via.placeholder.com/150" alt="Shelly Li" className="profile-image" />
        <div className="info-content">
          <h3>Shelly Li</h3>
          <p>Full Stack Developer | React Enthusiast | Problem Solver</p>
          <p>
            I'm a passionate software developer with expertise in modern web technologies. Currently
            pursuing advanced studies in full-stack development with a focus on React, Node.js, and
            cloud technologies. I love building responsive and user-friendly applications that make
            a difference.
          </p>
          <div className="contact-info">
            <p>📧 shelly.li@example.com</p>
            <p>📍 Winnipeg, MB</p>
            <p>💼 Open to opportunities</p>
            <p>🐙 GitHub: li0828-web</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BasicInfo;
