import React from "react";
import Typewriter from "typewriter-effect";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Hero.css"; // Custom CSS file for additional styling

export const Hero = () => {
  return (
    <section className="hero d-flex align-items-center">
      <div className="container text-center">
        <h1 className="hero-title">
        <Typewriter
            options={{
              strings: ["Welcome to AgriZone.."],
              autoStart: true,
              loop: true,
              typeSpeed: 50
            }}
          />
        </h1>
        <p className="hero-subtitle">
          Discover the latest agricultural trends, tips, and innovations.
        </p>
        <a href="#blog" className="btn btn-success btn-lg">
          Read More
        </a>
      </div>
    </section>
  );
};


