import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-content">
        <div className="logo">Shriya</div>
        <nav>
          <a href="#about-section">About Me</a>
          <a href="#skills-section">Skills</a>
          <a href="#projects-section">Projects</a>
          <a href="#contact-section">Contact</a>
        </nav>
      </div>
    </header>
  );
}
