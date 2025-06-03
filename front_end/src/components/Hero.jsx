import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Hero.css";

export const Hero = () => {
  const [message, setMessage] = useState("");
  const [botResponse, setBotResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAsk = async () => {
    if (!message.trim()) return;
    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/api/chat`,
        { message }
      );
      setBotResponse(response.data.reply);
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error:", error.message);
      setBotResponse("Failed to get response from the bot. Please try again later.");
      setIsModalOpen(true);
    }
    setMessage("");
    setLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleAsk();
  };

  return (
    <section className="hero">
      <div className="container hero-container mt-5 ">
        <div className="hero-card p-md-4 rounded shadow-lg">
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

          <div className="row align-items-center">
            <div className="col-12 col-lg-6 mb-0 d-flex flex-column justify-content-center align-items-center text-center p-4">
              <h5 className="hero-subtitle">
                <span className="text-success fw-bold">AgriZone</span> is your smart farming guide—explore tips, trends, and tech. Chat with our <span className="text-success fw-bold">AI Assistant</span> for quick answers and grow your agricultural knowledge anytime!
              </h5>
              <Link to="/Article" className="btn btn-articles text-white bg-success mt-3">
                Explore Articles
              </Link>
            </div>

            <div className="col-12 col-lg-6 p-4">
              <div className="hero-chat-container">
                <h3 className="chatbot-header">AgriZone Assistant :</h3>
                <input
                  type="text"
                  className="chatbot-input"
                  placeholder="Ask about agriculture..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  disabled={loading}
                />
                <button
                  className="btn btn-success mt-3"
                  onClick={handleAsk}
                  disabled={loading}
                >
                  {loading ? "Asking..." : "Ask"}
                </button>
                <small className="text-muted mt-3 d-block">
                  What's your farming challenge today? I've got answers!
                </small>
              </div>
            </div>
          </div>

          {isModalOpen && (
            <>
              <div
                className="modal-backdrop fade show"
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100vw",
                  height: "100vh",
                  backgroundColor: "rgba(0, 0, 0, 0.72)",
                  zIndex: 1040,
                }}
                onClick={() => setIsModalOpen(false)}
              />

              <div className="modal fade show d-block" style={{ zIndex: 1050 }}>
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title text-success">AgriZone Bot:</h5>
                    </div>
                    <div className="modal-body">
                      <ReactMarkdown>{botResponse}</ReactMarkdown>
                    </div>
                    <div className="modal-footer">
                      <button
                        className="btn btn-danger text-white"
                        onClick={() => setIsModalOpen(false)}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
