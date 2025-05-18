import React, { useContext } from 'react';
import logo from "../img/AgriZone.png";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container-fluid px-4">
        {/* Logo */}
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="AgriZone Logo" className="logo" />
        </Link>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">

            {user ? (
              <>
                <li className="nav-item mx-2 text-success fw-bold">
                  Welcome, {user.username}
                </li>
                <li className="nav-item mx-4">
                  <button className="btn btn-outline-danger btn-sm" onClick={logout}>
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item ">
                  <Link to="/login" className="btn btn-outline-success btn-sm ms-2 ">
                    Login
                  </Link>
                </li>
                <li className="nav-item mx-4">
                  <Link to="/Register" className="btn btn-success btn-sm ms-2">
                    Register
                  </Link>
                </li>
              </>
            )}

            <li className="nav-item">
              <Link to="/" className="nav-link text-success">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/Article" className="nav-link text-success">Articles</Link>
            </li>
            <li className="nav-item">
              <Link to="/Services" className="nav-link text-success">Services</Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};
