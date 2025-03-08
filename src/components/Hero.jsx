import React from "react";
import Typewriter from "typewriter-effect";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Hero.css"; // Custom CSS file for additional styling

export const Hero = () => {
  return (
    <section className="hero d-flex align-items-center">
      <div className="container d-flex align-items-center text-center ">
         
        <div className="row border">
          <h1 className="col-12 hero-title ">
            <Typewriter
                options={{
                  strings: ["Welcome to AgriZone.."],
                  autoStart: true,
                  loop: true,
                  typeSpeed: 50
                }}
              />
          </h1>
          {/* left box */}
          <div className="col-12 col-sm-6 left-box ">
            
            <p className="hero-subtitle">
            Welcome to AgriZone – your go-to place for everything agriculture! 🌱 Whether you're a farmer, gardener, or just love plants, we bring you expert tips, modern farming techniques, and the latest agri-tech news. Learn about organic farming, soil health, crop care, and sustainable agriculture. Our goal is to help you grow better, farm smarter, and stay updated with new trends. 🌾💡<br /><br />

Have questions? Meet our smart chatbot! 🤖💬 It’s here 24/7 to answer your farming-related queries, suggest best practices, and guide you with quick solutions. Just type your question and get instant responses. Whether you need help with pest control, weather updates, or planting tips, our chatbot is always ready.

Join our community of passionate farmers and agriculture lovers. Let’s grow together! 🚜🌿
            </p>
            <a href="#blog" className="btn btn-success btn-lg">
              Read More
            </a>
          </div>

          {/* Right box */}
          <div className="col-12 col-sm-6 right-box ">
            <h1>chatbot</h1>
            <div className="">
              <input type="text" className="chatbot" />
            </div>
            <button className="btn btn-primary mt-4">Ask</button>
          </div>

        </div>
      </div>
    </section>
  );
};


