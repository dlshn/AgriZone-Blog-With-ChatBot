import React from "react";
import { FaFacebook, FaYoutube, FaPinterest, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import logo from "../img/AgriZone.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <img src={logo} alt="AgriZone Logo" className="footer-logo" />
            <p className="footer-description">
              Your trusted source for agriculture insights, news, and guides.
            </p>
          </div>

          {/* Links Column */}
          <div className="footer-links">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-nav">
              <li><a href="/">Home</a></li>
              <li><a href="/Article">Articles</a></li>
              <li><a href="/About">About</a></li>
              <li><a href="/Contact">Contact</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer-contact">
            <h3 className="footer-heading">Contact Us</h3>
            <ul className="contact-info">
              <li>
                <MdEmail className="contact-icon" />
                <a href="mailto:agrizoneofficial01@gmail.com">agrizoneofficial01@gmail.com</a>
              </li>
              <li>
                <FaWhatsapp className="contact-icon" />
                <a href="https://wa.me/94705570433">+94 70 557 0433</a>
              </li>
              <li>
                <MdLocationOn className="contact-icon" />
                <span>Colombo, Sri Lanka</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="footer-social">
          <a href="https://www.facebook.com/profile.php?id=100093844576140" aria-label="Facebook">
            <FaFacebook />
          </a>
          <a href="https://www.youtube.com/@AgriZone-" aria-label="YouTube">
            <FaYoutube />
          </a>
          <a href="https://www.pinterest.com/agrizoneofficial01/" aria-label="Pinterest">
            <FaPinterest />
          </a>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} AgriZone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;