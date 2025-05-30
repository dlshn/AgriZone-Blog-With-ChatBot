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
      setIsModalOpen(true); // Open modal
    } catch (error) {
      console.error("Error:", error.message);
      setBotResponse("Failed to get response from the bot. Please try again later.");
      setIsModalOpen(true); // Still show error in modal
    }
    setMessage("");
    setLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAsk();
    }
  };

  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="hero-card p-md-2 rounded shadow">
              <div className="row align-items-center mx-0 shadow-none pb-4">
                <div className="col-12 mt-0 border-none">
                  <h1 className="hero-title display-4 text-success text-center mt-0 mb-4 border-none">

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
                </div>

                {/* Left Content  */}
                <div className="col-12 col-lg-6 mb-4 mb-lg-0 p-4 rounded d-flex flex-column justify-content-center align-items-center">
                  <h5 className="hero-subtitle text-center">
                    <span className="text-success fw-bold">AgriZone</span> is your smart farming guide—explore tips, trends, and tech. Chat with our <span className="text-success fw-bold">AI Assistant</span> for quick answers and grow your agricultural knowledge anytime!
                  </h5>

                  <div className="d-flex flex-wrap gap-3">
                    <Link to="/Article" className="btn btn-articles text-white bg-success">
                      Explore Articles
                    </Link>
                  </div>
                </div>

                {/* Right Chatbot */}
                <div className="col-12 col-lg-6 p-0">
                  <div className="hero-chat-container">
                    <h3 className="chatbot-header">AgriZone Assistant :</h3>

                    <div className="input-group mb-3 flex-column gap-2">
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
                        type="button"
                        className="btn btn-success mt-2"
                        onClick={handleAsk}
                      >
                        {loading ? "Asking..." : "Ask"}
                      </button>
                    </div>

                    <small className="text-muted mt-3">
                      What's your farming challenge today? I've got answers!
                    </small>
                  </div>
                </div>

                {isModalOpen && (
                <>
                  {/* Backdrop */}
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
                    onClick={() => setIsModalOpen(false)} // Optional: close on backdrop click
                  />

                  {/* Modal */}
                  <div
                    className="modal fade show d-block"
                    style={{ zIndex: 1050 }}
                    tabIndex="-1"
                    role="dialog"
                  >
                    <div className="modal-dialog modal-dialog-centered" role="document">
                      <div className="modal-content d-flex flex-column justify-content-center align-items-center">
                        <div className="modal-header">
                          <h5 className="modal-title text-success">AgriZone Bot:</h5>
                        </div>
                        <div className="modal-body">
                          
                            <ReactMarkdown>{botResponse}</ReactMarkdown>
                          
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            onClick={() => setIsModalOpen(false)}
                            className="text-white btn btn-danger"
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
          </div>
        </div>
      </div>
    </section>
  );
};
