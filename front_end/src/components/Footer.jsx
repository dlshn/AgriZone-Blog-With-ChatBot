import React from "react";
import { FaFacebookF, FaPinterest , FaWhatsapp,    } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";

import { MdLocationPin } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import "../styles/Footer.css"; // optional for extra style
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../img/AgriZone.png";

const Footer = () => {
  return (
    <footer className="bg-succes text-dark pt-4 pb-2 mt-5">
        
      <div className="container text-center text-md-left p-2 ">
        <div className="row">
            
            <div className="d-flex flex-column flex-md-row justify-content-between gap-3 ">
                {/* Logo / About */}
                <div className="col-md-4 ">
                <h5 className="text-uppercase fw-bold text-success">AgriZone</h5>
                <img src={logo} alt="AgriZone Logo" className="img-fluid mb-2" style={{ width: "100px" }} />
                <p>Your trusted source for agriculture insights, news, and guides.</p>
                </div>

                {/* Quick Links */}
                <div className="col-md-4">
                    <h5 className="text-uppercase fw-bold text-success">Quick Links</h5>
                    <ul className="list-unstyled d-flex flex-column gap-2">
                    <li><a href="/" className="text-dark text-decoration-none">Home</a></li>
                    <li><a href="/create" className="text-dark text-decoration-none">Create Article</a></li>
                    <li><a href="/about" className="text-dark text-decoration-none">About</a></li>
                    <li><a href="/contact" className="text-dark text-decoration-none">Contact</a></li>
                    </ul>
                </div>

                {/* Contact / Social */}
                <div className="col-md-4 px-5">
                    <h5 className="text-uppercase fw-bold text-success">Connect</h5>
                    <div className="d-flex flex-column align-items-start gap-2">
                        <a href="mailto:agrizoneofficial01@gmail.com" className="text-dark d-block"><TfiEmail /> agrizoneofficial01@gmail.com</a>
                        <a href="https://wa.me/94705570433" className="text-dark d-block"><FaWhatsapp /> +94 70 557 0433</a>
                        <p><MdLocationPin /> Colombo, Sri Lanka</p>
                    </div>
                    <div className="d-flex flex-row gap-5 justify-content-center mt-3">
                        <a href="https://www.facebook.com/profile.php?id=100093844576140" className="text-success"><FaFacebookF /></a>
                        <a href="https://www.youtube.com/@AgriZone-" className="text-success"><IoLogoYoutube /></a>
                        <a href="https://www.pinterest.com/agrizoneofficial01/" className="text-success"><FaPinterest /></a>
                    </div>
                </div>
            </div>
            
            <div className="text-center">
                <small>© {new Date().getFullYear()} AgriZone. All rights reserved.</small>
            </div>
          
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
