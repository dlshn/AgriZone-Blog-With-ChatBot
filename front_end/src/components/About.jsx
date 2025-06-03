import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/About.css"; // Create this file for custom styles

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="about-container"> {/* Changed from container to about-container */}
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-10 px-4 px-md-5"> {/* Adjusted padding */}
            <h1 className="text-success text-center mb-4">About AgriZone</h1>
            <p className="fs-5">
              <strong>AgriZone</strong> is your trusted digital hub for everything related to agriculture. 
              Our mission is to empower farmers, agri-enthusiasts, and students by providing 
              reliable, practical, and up-to-date content on modern farming techniques, crop care, 
              sustainable practices, and the latest innovations in agri-tech.
            </p>
            <p className="fs-5">
              Whether you're a beginner learning about soil health or an experienced farmer looking for 
              organic pest control methods, AgriZone is here to support your journey with quality blog 
              articles written and reviewed by agricultural experts and enthusiasts.
            </p>
            <h4 className="mt-5 text-success">Meet Our AI Assistant</h4>
            <p className="fs-5">
              We're proud to introduce our <strong>AI Assistant</strong> – your smart companion available 
              24/7 to answer your questions, help you find relevant blog posts, and guide you through 
              the latest agricultural trends and resources. Just type your question into the chatbot, 
              and our AI will assist you in seconds!
            </p>
            <p className="fs-5">
              AgriZone believes in the power of combining traditional knowledge with advanced technology 
              to make farming more efficient, sustainable, and profitable for everyone.
            </p>
            <p className="text-center mt-4">
              <strong>Thank you for being a part of the AgriZone community!</strong>
            </p>
            <div className="text-center">
              <button className="btn btn-success mt-3 px-4 py-2" onClick={() => navigate('/')}>
                ← Chat with AI
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;