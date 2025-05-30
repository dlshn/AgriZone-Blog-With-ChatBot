import React, { useState, useEffect } from 'react';
import logo from "../img/AgriZone.png";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg position-sticky top-0 ${isScrolled ? 'navbar-scrolled' : ''}`} 
         style={{ 
           background: isScrolled 
             ? 'rgba(255, 255, 255, 0.95)' 
             : 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #e8f5e8 100%)',
           zIndex: 1000,
           backdropFilter: 'blur(20px)',
           borderBottom: isScrolled ? '1px solid rgba(40, 167, 69, 0.1)' : '2px solid #28a745',
           transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
           boxShadow: isScrolled 
             ? '0 8px 32px rgba(40, 167, 69, 0.1)' 
             : '0 4px 20px rgba(40, 167, 69, 0.15)'
         }}>
      <div className="container-fluid px-4 py-2">
        {/* Logo */}
        <Link to="/" className="navbar-brand d-flex align-items-center" 
              style={{
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}>
          <div style={{
            position: 'relative',
            marginRight: '12px'
          }}>
            <img src={logo} alt="AgriZone Logo" className="logo" 
                 style={{
                   width: '45px',
                   height: '45px',
                   borderRadius: '12px',
                   filter: 'drop-shadow(0 4px 12px rgba(40, 167, 69, 0.25))',
                   transition: 'all 0.3s ease'
                 }} />
            <div style={{
              position: 'absolute',
              top: '-2px',
              right: '-2px',
              width: '12px',
              height: '12px',
              background: 'linear-gradient(45deg, #28a745, #20c997)',
              borderRadius: '50%',
              border: '2px solid white',
              animation: 'pulse 2s infinite'
            }}></div>
          </div>
          <span className="fw-bold"
                style={{
                  fontSize: '1.6rem',
                  background: 'linear-gradient(45deg, #28a745, #20c997)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  letterSpacing: '-0.5px',
                  fontFamily: '"Sofia", sans-serif',
                }}>AgriZone</span>
        </Link>

        {/* Modern Toggle Button */}
        <button
          className="navbar-toggler border-0 p-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{
            width: '44px',
            height: '44px',
            background: 'linear-gradient(135deg, #28a745, #20c997)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 12px rgba(40, 167, 69, 0.3)'
          }}
          onMouseOver={(e) => {
            e.target.style.transform = 'scale(1.05)';
            e.target.style.boxShadow = '0 6px 20px rgba(40, 167, 69, 0.4)';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = '0 4px 12px rgba(40, 167, 69, 0.3)';
          }}>
          <div style={{
            width: '20px',
            height: '14px',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <span style={{
              width: '100%',
              height: '2px',
              backgroundColor: 'white',
              borderRadius: '1px',
              transition: 'all 0.3s ease'
            }}></span>
            <span style={{
              width: '70%',
              height: '2px',
              backgroundColor: 'white',
              borderRadius: '1px',
              transition: 'all 0.3s ease'
            }}></span>
            <span style={{
              width: '100%',
              height: '2px',
              backgroundColor: 'white',
              borderRadius: '1px',
              transition: 'all 0.3s ease'
            }}></span>
          </div>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            
            {/* Navigation Items */}
            {[
              { to: "/", icon: "fas fa-home", text: "Home" },
              { to: "/Article", icon: "fas fa-newspaper", text: "Articles" },
              { to: "/About", icon: "fas fa-info-circle", text: "About" },
              { to: "/Contact", icon: "fas fa-envelope", text: "Contact" }
            ].map((item, index) => (
              <li key={index} className="nav-item mx-1">
                <Link to={item.to} 
                      className="nav-link position-relative fw-medium px-4 py-2 text-decoration-none"
                      style={{
                        color: '#28a745',
                        borderRadius: '25px',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        fontSize: '15px',
                        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
                        overflow: 'hidden'
                      }}
                      onMouseOver={(e) => {
                        e.target.style.background = 'linear-gradient(135deg, rgba(40, 167, 69, 0.1), rgba(32, 201, 151, 0.1))';
                        e.target.style.color = '#218838';
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = '0 4px 15px rgba(40, 167, 69, 0.2)';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.background = 'transparent';
                        e.target.style.color = '#28a745';
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = 'none';
                      }}
                      >
                  <i className={`${item.icon} me-2 text-success`} 
                     style={{ fontSize: '14px' }}></i>
                  {item.text}
                </Link>
              </li>
            ))}

            {/* Login Button */}
            <li className="nav-item ms-3">
              <Link to="/login" 
                    className="btn rounded-pill px-4 py-2 fw-semibold text-decoration-none position-relative overflow-hidden"
                    style={{
                      background: 'linear-gradient(135deg, #28a745, #20c997)',
                      color: '#ffffff',
                      border: 'none',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      boxShadow: '0 4px 15px rgba(40, 167, 69, 0.3)',
                      fontSize: '14px',
                      fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
                      minWidth: '100px'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.transform = 'translateY(-2px) scale(1.02)';
                      e.target.style.boxShadow = '0 8px 25px rgba(40, 167, 69, 0.4)';
                      e.target.style.background = 'linear-gradient(135deg, #218838, #1ea085)';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.transform = 'translateY(0) scale(1)';
                      e.target.style.boxShadow = '0 4px 15px rgba(40, 167, 69, 0.3)';
                      e.target.style.background = 'linear-gradient(135deg, #28a745, #20c997)';
                    }}>
                <i className="fas fa-sign-in-alt me-2" style={{ fontSize: '13px' }}></i>
                Login
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                  transition: 'left 0.6s'
                }}></div>
              </Link>
            </li>

          </ul>
        </div>
      </div>

      {/* CSS for pulse animation */}
      <style jsx>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.8; }
          100% { transform: scale(1); opacity: 1; }
        }
        
        .navbar-scrolled {
          padding: 8px 0 !important;
        }
        
        .navbar-toggler:focus {
          box-shadow: none !important;
        }
        
        @media (max-width: 991px) {
          .navbar-collapse {
            background: rgba(255, 255, 255, 0.98) !important;
            backdrop-filter: blur(20px);
            border-radius: 16px !important;
            margin-top: 15px;
            padding: 20px !important;
            box-shadow: 0 8px 32px rgba(40, 167, 69, 0.15) !important;
            border: 1px solid rgba(40, 167, 69, 0.1);
          }
          
          .nav-item {
            margin: 5px 0 !important;
          }
          
          .nav-link {
            text-align: center !important;
            padding: 12px 20px !important;
            border-radius: 12px !important;
          }
        }
      `}</style>
    </nav>
  );
};