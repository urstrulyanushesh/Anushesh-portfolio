import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <a href="#home" className="navbar-logo">
          <span className="logo-icon">◆</span> urstrulyanushesh
        </a>
        <div className="navbar-links">
          {['home', 'works', 'about-me', 'contacts'].map(link => (
            <a key={link} href={`#${link}`} className="nav-link">#{link}</a>
          ))}
          <span className="nav-lang">EN</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
