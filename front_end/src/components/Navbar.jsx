import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from "../img/AgriZone.png";
import "../styles/Navbar.css";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10); 
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar fixed-top navbar-expand-lg ${isScrolled ? 'navbar-scrolled' : ''} ${isExpanded ? 'navbar-expanded' : ''}`}>
      <div className="container-fluid px-4 py-2">
        <Link to="/" className="navbar-brand d-flex align-items-center logo-hover">
          <img src={logo} alt="AgriZone" className="logo-img" />
          <span className="logo-text">AgriZone</span>
        </Link>

        <button 
          className="navbar-toggler custom-toggler" 
          type="button" 
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isExpanded ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav d-flex align-items-center justify-content-center ms-auto mb-2 mb-lg-0 gap-3">
            {[
              { to: "/", text: "Home", icon: "fas fa-home" },
              { to: "/Article", text: "Articles", icon: "fas fa-newspaper" },
              { to: "/About", text: "About", icon: "fas fa-info-circle" },
              { to: "/Contact", text: "Contact", icon: "fas fa-envelope" },
            ].map(({ to, text, icon }) => (
              <li className="nav-item" key={to}>
                <Link to={to} className="nav-link" onClick={() => setIsExpanded(false)}>
                  <i className={`${icon} me-2`}></i>{text}
                </Link>
              </li>
            ))}

            <li className="nav-item">
              <Link to="/login" className="text-success login-btn" onClick={() => setIsExpanded(false)}>
                <i className="fas fa-sign-in-alt me-2"></i>Admin
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};