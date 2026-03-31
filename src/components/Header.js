import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-brand">
          <Link to="/">Shelly Li Portfolio</Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/work">Work</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/resources">Resources</Link></li>
          <li><Link to="/developer-setup">Dev Setup</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
