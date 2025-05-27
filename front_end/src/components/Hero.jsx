// Hero.js
import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Hero.css";
import { Link } from "react-router-dom";
import axios from "axios";
import ReactMarkdown from "react-markdown";

export const Hero = () => {
  const [message, setMessage] = useState("");
  const [botResponse, setBotResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!message.trim()) return;
    
    setLoading(true);
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/chat`, {
        message: message,
      });
      setBotResponse(response.data.reply);
    } catch (error) {
      console.error("Error:", error.message);
      setBotResponse("Failed to get response from the bot. Please try again later.");
    }
    setMessage("");
    setLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAsk();
    }
  };

  return (
    <section className="hero">
      <div className="container hero-container pb-5">
        <div className="row justify-content-center ">
          <div className="col-lg-12 ">
            <div className="hero-card p-2 p-md-2">
              <div className="row align-items-center mx-0">
                <h1 className="hero-title display-4 text-success text-center mb-4">
                    <Typewriter
                      options={{
                        strings: ["Welcome to AgriZone..."],
                        autoStart: true,
                        loop: true,
                        typeSpeed: 100,
                        deleteSpeed: 30,
                      }}
                    />
                  </h1>
                {/* Left Content */}
                <div className="col-lg-6 mb-4 mb-lg-0 border border-success p-4 rounded d-flex flex-column justify-content-center align-items-center">
                  
                  
                  <h5 className="hero-subtitle">
                    Your premier agriculture knowledge hub! <span className="text-success"><b>AgriZone</b></span> empowers farmers, agripreneurs, students, and farming enthusiasts with cutting-edge insights - from field techniques to agri-tech innovations. Access expert guidance anytime through our intelligent farming assistant.
                  </h5>
                  
                  <div className="d-flex flex-wrap gap-3">
                    <Link to="/Article" className="btn btn-articles text-white bg-success">
                      Explore Articles
                    </Link>
                  </div>
                </div>
                
                {/* Right Chatbot */}
                <div className="col-lg-6">
                  <div className="hero-chat-container">
                    <h3 className="chatbot-header">AgriZone Assistant :</h3>
                    
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control chatbot-input"
                        placeholder="Ask about agriculture..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        disabled={loading}
                      />
                      <button 
                        className="btn btn-ask text-white" 
                        onClick={handleAsk}
                        disabled={loading || !message.trim()}
                      >
                        {loading ? 'Asking...' : 'Ask'}
                      </button>
                    </div>
                    
                    {loading && (
                      <div className="chat-response">
                        <div className="d-flex align-items-center">
                          <div className="spinner-border text-success me-2" role="status">
                            <span className="visually-hidden">Loading...</span>
                          </div>
                          <strong>AgriBot is thinking...</strong>
                        </div>
                      </div>
                    )}
                    
                    {botResponse && !loading && (
                      <div className="chat-response">
                        <strong className="text-success">AgriBot:</strong>
                        <div className="mt-2">
                          <ReactMarkdown>{botResponse}</ReactMarkdown>
                        </div>
                      </div>
                    )}
                    
                    <small className="text-muted mt-3">
                      What's your farming challenge today? I've got answers!
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
    </section>
  );
};