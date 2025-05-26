import React, { useContext } from 'react';
import logo from "../img/AgriZone.png";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg shadow-lg position-sticky top-0" 
         style={{ 
           background: 'linear-gradient(90deg, #ffffff 0%, #f8f9fa 100%)',
           zIndex: 1000,
           backdropFilter: 'blur(10px)',
           borderBottom: '3px solid #28a745'
         }}>
      <div className="container-fluid px-4">
        {/* Logo */}
        <Link to="/" className="navbar-brand" 
              style={{
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'scale(1)';
              }}>
          <img src={logo} alt="AgriZone Logo" className="logo" 
               style={{
                 filter: 'drop-shadow(0 2px 4px rgba(40, 167, 69, 0.2))'
               }} />
        </Link>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler border-0 shadow-sm"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{
            background: 'linear-gradient(45deg, #28a745, #20c997)',
            borderRadius: '10px',
            padding: '8px 12px'
          }}>
          <span className="navbar-toggler-icon" 
                style={{ 
                  backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 1%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")` 
                }}></span>
        </button>

        {/* Nav Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">

            {user ? (
              <>
                <li className="nav-item mx-3">
                  <div className="d-flex align-items-center bg-success bg-opacity-10 rounded-pill px-4 py-2" 
                       style={{
                         border: '2px solid #28a745',
                         backdropFilter: 'blur(5px)'
                       }}>
                    <div className="bg-success rounded-circle p-1 me-2">
                      <i className="fas fa-user text-white" style={{fontSize: '12px'}}></i>
                    </div>
                    <span className="text-success fw-bold">Welcome, {user.username}</span>
                  </div>
                </li>
                <li className="nav-item mx-3">
                  <button className="btn btn-outline-dark btn-sm rounded-pill px-4 py-2 fw-semibold shadow-sm" 
                          onClick={logout}
                          style={{
                            border: '2px solid #000000',
                            transition: 'all 0.3s ease'
                          }}
                          onMouseOver={(e) => {
                            e.target.style.background = '#000000';
                            e.target.style.color = '#ffffff';
                            e.target.style.transform = 'translateY(-2px)';
                            e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
                          }}
                          onMouseOut={(e) => {
                            e.target.style.background = 'transparent';
                            e.target.style.color = '#000000';
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                          }}>
                    <i className="fas fa-sign-out-alt me-2"></i>Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item mx-2">
                  <Link to="/login" 
                        className="btn btn-outline-success btn-sm rounded-pill px-4 py-2 fw-semibold shadow-sm text-decoration-none"
                        style={{
                          border: '2px solid #28a745',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseOver={(e) => {
                          e.target.style.background = '#28a745';
                          e.target.style.color = '#ffffff';
                          e.target.style.transform = 'translateY(-2px)';
                          e.target.style.boxShadow = '0 4px 15px rgba(40, 167, 69, 0.3)';
                        }}
                        onMouseOut={(e) => {
                          e.target.style.background = 'transparent';
                          e.target.style.color = '#28a745';
                          e.target.style.transform = 'translateY(0)';
                          e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                        }}>
                    <i className="fas fa-sign-in-alt me-2"></i>Login
                  </Link>
                </li>
                <li className="nav-item mx-2">
                  <Link to="/Register" 
                        className="btn btn-success btn-sm rounded-pill px-4 py-2 fw-semibold shadow-sm text-decoration-none"
                        style={{
                          background: '#28a745',
                          border: '2px solid #28a745',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseOver={(e) => {
                          e.target.style.background = '#218838';
                          e.target.style.borderColor = '#218838';
                          e.target.style.transform = 'translateY(-2px)';
                          e.target.style.boxShadow = '0 4px 15px rgba(40, 167, 69, 0.4)';
                        }}
                        onMouseOut={(e) => {
                          e.target.style.background = '#28a745';
                          e.target.style.borderColor = '#28a745';
                          e.target.style.transform = 'translateY(0)';
                          e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                        }}>
                    <i className="fas fa-user-plus me-2"></i>Register
                  </Link>
                </li>
              </>
            )}

            <li className="nav-item mx-2">
              <Link to="/" 
                    className="nav-link fw-semibold px-3 py-2 rounded-pill text-decoration-none"
                    style={{
                      color: '#28a745',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.background = 'rgba(40, 167, 69, 0.1)';
                      e.target.style.color = '#218838';
                      e.target.style.transform = 'translateY(-1px)';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.background = 'transparent';
                      e.target.style.color = '#28a745';
                      e.target.style.transform = 'translateY(0)';
                    }}>
                <i className="fas fa-home me-2"></i>Home
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="/Article" 
                    className="nav-link fw-semibold px-3 py-2 rounded-pill text-decoration-none"
                    style={{
                      color: '#28a745',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.background = 'rgba(40, 167, 69, 0.1)';
                      e.target.style.color = '#218838';
                      e.target.style.transform = 'translateY(-1px)';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.background = 'transparent';
                      e.target.style.color = '#28a745';
                      e.target.style.transform = 'translateY(0)';
                    }}>
                <i className="fas fa-newspaper me-2"></i>Articles
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="/" 
                    className="nav-link fw-semibold px-3 py-2 rounded-pill text-decoration-none"
                    style={{
                      color: '#28a745',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.background = 'rgba(40, 167, 69, 0.1)';
                      e.target.style.color = '#218838';
                      e.target.style.transform = 'translateY(-1px)';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.background = 'transparent';
                      e.target.style.color = '#28a745';
                      e.target.style.transform = 'translateY(0)';
                    }}>
                <i className="fas fa-plus-circle me-2"></i>Create
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};